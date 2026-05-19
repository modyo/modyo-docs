---
search: true
---

# Modyo MCP

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io) is an open standard for connecting AI assistants with external tools and data sources. The **Modyo MCP Server** implements this protocol on top of Modyo's admin API, allowing an AI agent to manage content, sites, widgets, customers, and platform administration tasks using natural language.

Distributed as an NPM package ([`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)), it works with any MCP-compatible client (Claude Desktop, Claude Code, Cursor, GitHub Copilot, Gemini CLI, and others).

:::warning Warning — Permissions
The MCP server operates with the same permissions as the admin user associated with the `MODYO_TOKEN`. An agent with access to this token can create, modify, and delete content, sites, widgets, users, and platform settings. **Use a token with the minimum required scope** and review the agent's actions before approving destructive operations (page deletion, mass unpublishing, deletion of realms or users). For production use, consider creating a dedicated admin user with a narrow role and rotating the token periodically.
:::

## Requirements

- Node.js 22 or later
- A Modyo platform instance reachable over HTTPS
- A Modyo admin token (Modyo Admin → Settings → API Access)

## Installation

The MCP server runs as a local process (stdio transport) that the AI client spawns on demand. Configuration consists of adding the server to the client's configuration file, declaring the command (`npx -y @modyo/mcp`) and the minimum environment variables.

### Claude Desktop

Edit `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

Restart Claude Desktop after saving.

### Claude Code

```bash
claude mcp add modyo \
  --scope project \
  --env MODYO_URL=https://your-org.modyo.com \
  --env MODYO_TOKEN=your-token \
  -- npx -y @modyo/mcp
```

Use `--scope user` instead of `--scope project` to apply the configuration globally.

To verify the registration:

```bash
claude mcp list
```

### Cursor

Edit `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      }
    }
  }
}
```

### GitHub Copilot in VS Code

Requires Copilot with **Agent Mode** enabled.

Create `.vscode/mcp.json` at your project root (per-project, recommended):

```json
{
  "servers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      }
    }
  }
}
```

A **Start** button will appear at the top of the file. Click it to start the server and let Copilot discover the available tools.

For global setup, use the Command Palette → `Chat: Open User MCP Configuration` with the same structure.

:::tip For Copilot Business or Enterprise organizations
An administrator must enable the "MCP servers in Copilot" policy in the organization settings.
:::

### GitHub Copilot CLI

Inside an interactive Copilot CLI session:

```
/mcp add
```

Follow the wizard: select `Local or STDIO`, enter `npx -y @modyo/mcp` as the command, and add the environment variables.

Alternatively, edit `~/.copilot/mcp-config.json` directly:

```json
{
  "mcpServers": {
    "modyo": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      },
      "tools": ["*"]
    }
  }
}
```

### Gemini CLI

Edit `~/.gemini/settings.json` for a global setup, or `.gemini/settings.json` in your project:

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://your-org.modyo.com",
        "MODYO_TOKEN": "your-token"
      }
    }
  }
}
```

:::warning Gemini CLI and environment variables
Gemini CLI automatically redacts environment variables matching sensitive patterns like `*TOKEN*`. Always declare `MODYO_TOKEN` explicitly inside the `env` block as shown above — do not rely on shell-exported variables.
:::

### Other MCP clients

Any client that supports the stdio transport can run:

```
command: npx
args: ["-y", "@modyo/mcp"]
env:
  MODYO_URL: https://your-org.modyo.com
  MODYO_TOKEN: your-token
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `MODYO_URL` | Yes | Platform URL (e.g., `https://your-org.modyo.com`) |
| `MODYO_TOKEN` | Yes | Admin token obtained from Modyo Admin → Settings → API Access |
| `MODYO_PLATFORM_NAME` | No | Display name for the platform (default: `"default"`) |
| `DEBUG` | No | Enable debug logging when set to `true` or `1` |

Without `MODYO_URL` and `MODYO_TOKEN`, the server starts in **public mode** and only exposes capabilities that don't require authentication. Useful for exploring available tools and resources before connecting to a platform.

## Available Capabilities

The server exposes three types of MCP capabilities: **tools** (actions the agent can invoke), **resources** (documentation and data the agent can query by URI), and **prompts** (guided multi-step workflows).

### Modules covered

| Module | Coverage |
|--------|----------|
| **Core** | Teams, admin users, groups, roles, platform settings |
| **Content** | Spaces, content types, entries, assets, categories, async jobs |
| **Channels** | Sites, pages, widgets, Liquid templates, releases, navigation, global variables |
| **Customers** | Realms, end users, segments, forms, submissions, originations |

### Tools

Tools follow the `{module}-{resource}-{action}` naming convention. For example: `content-spaces-manage`, `channels-pages-create`, `customers-realms-manage`. Most follow one of these patterns:

- `*-list` — List resources with pagination and filters
- `*-get` — Fetch a single resource by ID, slug, or UUID
- `*-manage` — Create, update, delete (a condensed CRUD toolset)
- `*-upsert` — Create or update (idempotent)
- `*-bulk` — Batch operations (async)
- `*-copy` — Clone resources preserving relationships

#### Summary by module

**Core** (~9 tools): `core-groups-manage`, `core-groups-upsert`, `core-members-manage`, `core-roles-create`, `core-roles-manage`, `core-settings-manage`, `core-users-bulk`, `core-users-manage`, `core-users-upsert`.

**Content** (~22 tools): manage `content-spaces-*`, `content-types-*`, `content-entries-*`, `content-assets-*`, `content-categories-*`, plus `content-jobs-manage` for async tasks.

**Channels** (~26 tools): manage `channels-sites-*`, `channels-pages-*` (including `channels-pages-content` and `channels-pages-widget` for content vs. configuration), `channels-widgets-*`, `channels-templates-*` (with `channels-templates-find`, `channels-templates-search`, `channels-templates-replace`), `channels-menus-*`, `channels-menu-items-manage`, `channels-variables-manage`, `channels-locks-manage`, `channels-publish`, `channels-preview`, `channels-download`, `channels-site-assets-manage`, `channels-account-templates-manage`.

**Customers** (~17 tools): manage `customers-realms-*`, `customers-users-*`, `customers-segments-manage`, `customers-forms-*`, `customers-submissions-*`, `customers-datasets-*`, `customers-originations-*` (including validation and step cloning).

:::tip Inline documentation
Every tool includes a `📚 modyo://docs/tools/{toolPath}` link in its description that the agent can read to see parameter details, examples, and constraints. Ask the agent "read the docs for tool X" to inspect the details before invocation.
:::

### Resources

Resources are URIs the agent can read to query structured information:

| URI | Description |
|-----|-------------|
| `platforms://list` | List of configured platforms (Modyo MCP supports multi-platform) |
| `modyo://context/agent-rules` | Operational rules for the agent (security, IDs vs UUIDs, recurring patterns) |
| `modyo://docs/tools/{toolPath}` | Per-tool documentation |
| `modyo://liquid-reference` | Full reference of Liquid tags, filters, and drops in Modyo |
| `modyo-spaces://list` | List of Content spaces |
| `modyo-realms://list` | List of Customers realms |

### Prompts

Prompts are guided multi-step workflows. Invoke a prompt and the agent runs a sequence of tools in order, asking for confirmation at decision points.

| Prompt | Workflow |
|--------|----------|
| `modyo-setup-site` | Create a new site: configure domain, base layout, initial pages |
| `modyo-create-space` | Create a Content space with its base structure |
| `modyo-create-blog` | Create a blog-style space with a "Post" type and initial entries |
| `modyo-create-content-page` | Create a page that lists entries from a content type |
| `modyo-create-widget-page` | Create a page that hosts a widget definition |
| `modyo-create-widget-definition` | Create a widget definition with starter code |
| `modyo-manage-templates` | Edit Liquid templates (layouts, snippets, stylesheets) for a site |
| `modyo-manage-releases` | Review pending changes and publish a release |

## Usage Examples

Once the server is configured, you can converse with the agent in natural language. Examples:

**Exploration**:

> "List all spaces in my platform"
> "What pages does the site with ID 5 have?"
> "Show the content types in the `blog` space"

**Creation**:

> "Create a content type called 'Products' with fields `name` (string), `price` (number), and `description` (rich text)"
> "Create a page at `/about` in the `marketing` site using the `base` layout"
> "Generate 10 sample entries in the `Products` content type"

**Editing**:

> "Update the main menu of site 5: add a 'Contact' item pointing to `/contact`"
> "Change the primary color in the `root.css` of the `marketing` site to `#ff6600`"

**Publishing**:

> "Show the pending changes for site 5 and publish them"
> "Temporarily unpublish the `/promo-2024` page in the `marketing` site"

**User management**:

> "Create an admin user `john@company.com` with the `site editor` role on the `marketing` site"
> "List the users in the `customers-prod` realm who registered this week"

## Troubleshooting

### "Platform not configured" error

```bash
# Verify environment variables are set
echo $MODYO_URL
echo $MODYO_TOKEN

# Test the token directly against the API
curl -H "Authorization: Bearer $MODYO_TOKEN" "$MODYO_URL/api/admin/account"
```

If the `curl` fails, regenerate the token from Modyo Admin → Settings → API Access.

### Agent does not detect the tools after installation

Restart the AI client (Claude Desktop, Cursor, VS Code, etc.). Tool discovery happens when the server starts, not at runtime.

For Claude Code, use `claude mcp list` to confirm that the server is registered.

### Gemini CLI — authentication fails silently

Gemini CLI filters environment variables matching `*TOKEN*` before passing them to MCP servers. Make sure `MODYO_TOKEN` is declared explicitly in the `env` block of `settings.json`, not just exported in the shell.

### GitHub Copilot CLI — `CAPIError: 400` after tool calls

Copilot CLI's auto-compaction can corrupt the message history during large tool call responses. This is a [known CLI bug](https://github.com/github/copilot-cli/issues/1050), not a server issue.

Workarounds:

- Start a fresh session: `rm -rf ~/.copilot/session-state && copilot --allow-all-tools`
- Keep responses small — ask the agent for specific fields instead of full objects. For example: *"list the sites, return only id, name, and host"*.

### Enable debug logs

Add `DEBUG=true` (or `DEBUG=1`) to the `env` block of the client configuration. Logs are written to `stderr` and are visible in the AI client's console if it supports surfacing them.

## Resources

- Repository: [github.com/modyo/modyo-mcp-server](https://github.com/modyo/modyo-mcp-server)
- NPM package: [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)
- MCP specification: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Other Modyo tools: [CLI](/en/platform/tools/cli.html), [SDK](/en/platform/tools/sdk.html)
