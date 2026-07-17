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

:::tip Optional variables
Any optional variable goes in the same `env` block of your client. For example, to audit a production site with no risk of modifying it:

    "env": {
      "MODYO_URL": "https://your-org.modyo.com",
      "MODYO_TOKEN": "your-admin-token",
      "MODYO_MCP_MODULES": "channels",
      "MODYO_READ_ONLY": "true"
    }

See [Environment Variables](#environment-variables) and [Module filtering and read-only mode](#module-filtering-and-read-only-mode).
:::

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `MODYO_URL` | Yes | Platform URL (e.g., `https://your-org.modyo.com`) |
| `MODYO_TOKEN` | Yes | Admin token obtained from Modyo Admin → Settings → API Access |
| `MODYO_PLATFORM_NAME` | No | Display name for the platform (default: `"default"`) |
| `MODYO_MCP_MODULES` | No | Comma-separated list of modules to enable (`core`, `content`, `channels`, `customers`, `widgets`). When unset, all are active. An invalid value stops startup with an explicit error. |
| `MODYO_READ_ONLY` | No | With `true` (exact value), the server performs no mutations against the platform, even if the token has write permissions. |
| `MODYO_DEFAULT_SITE_THEME` | No | Numeric theme ID used when creating a site without an explicit `theme` (default: `208`, tenant-specific). |
| `DEBUG` | No | Enable debug logging when set to `true` or `1` |

Without `MODYO_URL` and `MODYO_TOKEN`, the server starts in **public mode** and only exposes capabilities that don't require authentication. Useful for exploring available tools and resources before connecting to a platform.

## Module filtering and read-only mode

The server can be started with a reduced surface of capabilities. Two environment variables control this and can be combined with each other.

### Module filtering with `MODYO_MCP_MODULES`

Defines which modules are enabled via a comma-separated list. Valid values: `core`, `content`, `channels`, `customers`, `widgets`. Without the variable, all modules are active (default behavior).

The filter applies to **tools, resources, prompts, and the `instructions` block** of the initial handshake. Cross-cutting resources (documentation, `platforms://list`, `modyo://context/agent-rules`) remain available even when their module is filtered out — they are pure information, with no execution. **Workflow prompts** declare the modules they require and are only exposed if all of them are active (for example, `modyo-create-blog` requires `channels` and `content`).

An invalid value stops startup with exit code 1 and an explicit message (intentional fail-loud):

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

Startup log with filtering active (example with `MODYO_MCP_MODULES=widgets`):

```
Module filtering active. Modules enabled: widgets. Filtered out: core, content, channels, customers.
Tools: 5 (filtered from 80). Resources: 8 (filtered from 11). Prompts: 1 (filtered from 9).
```

### Read-only mode with `MODYO_READ_ONLY`

With the exact value `true`, the server guarantees it **performs no mutations** against the platform, even if the token has write permissions. Any other value (or the absence of the variable) means normal behavior. The main use case is auditing or exploring customer sites in production without any risk of modifying them.

The mechanism works in two layers:

1. Single-purpose write or delete tools **are not registered** — they don't appear in `tools/list`.
2. Multi-action tools (`*-manage`) stay registered but **gate by action**: only `list`, `get`, `search`, and `find` execute (plus `manage` with no mutating fields, which acts as a `get`). Everything else receives a structured rejection (`readOnly: true, rejected: ...`), not an error.

Startup log in read-only mode:

```
Read-only mode active (MODYO_READ_ONLY). Read tools exposed: 20. Multi-action tools gated: 25. Write/destroy tools skipped: 35.
```

### Combining both variables

The two variables compose. Real `tools/list` counts by configuration:

| Configuration | Exposed tools |
|---|---|
| No variables | 80 |
| `MODYO_MCP_MODULES=widgets` | 5 |
| `MODYO_READ_ONLY=true` | 45 |
| Both (`widgets` + read-only) | 4 |

To audit a site with no risk of modifying it, the recommended combination is `MODYO_MCP_MODULES=channels` + `MODYO_READ_ONLY=true`.

## Available Capabilities

The server exposes three types of MCP capabilities: **tools** (actions the agent can invoke), **resources** (documentation and data the agent can query by URI), and **prompts** (guided multi-step workflows).

### Modules covered

| Module | Coverage |
|--------|----------|
| **Core** | Teams, admin users, groups, roles, platform settings |
| **Content** | Spaces, content types, entries, assets, categories, async jobs |
| **Channels** | Sites, pages, widgets, Liquid templates, releases, navigation, global variables |
| **Customers** | Realms, end users, segments, forms, submissions, originations |
| **Widgets** | Transactional widget generation (React + Dynamic UI): scaffolding from the canonical template, component and pattern catalog from Storybook, validation |

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

**Channels** (~27 tools): manage `channels-sites-*`, `channels-pages-*` (including `channels-pages-content` and `channels-pages-widget` for content vs. configuration), `channels-widgets-*` (including `channels-widgets-code-edit` for surgical edits to a widget definition's code), `channels-templates-*` (with `channels-templates-find`, `channels-templates-search`, `channels-templates-replace`), `channels-menus-*`, `channels-menu-items-manage`, `channels-variables-manage`, `channels-locks-manage`, `channels-publish`, `channels-preview`, `channels-download`, `channels-site-assets-manage`, `channels-account-templates-manage`.

**Customers** (~17 tools): manage `customers-realms-*`, `customers-users-*`, `customers-segments-manage`, `customers-forms-*`, `customers-submissions-*`, `customers-datasets-*`, `customers-originations-*` (including validation and step cloning).

**Widgets** (5 tools): `widgets-list-components`, `widgets-get-component-props`, `widgets-list-patterns` (federate the Dynamic UI Storybook catalog), `widgets-scaffold` (initializes a new widget project from the canonical template), and `widgets-validate` (runs `@modyo/widget-validator` and returns a scored report).

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
| `modyo://docs/widgets/{docPath}` | Widget generation guide (entry point `modyo://docs/widgets/INDEX`) |
| `modyo://liquid-reference` | Full reference of Liquid tags, filters, and drops in Modyo |
| `modyo-spaces://list` | List of Content spaces |
| `modyo-realms://list` | List of Customers realms |
| `modyo://widgets/catalog/components` | Lightweight component list (id, name, key, description, storyCount) |
| `modyo://widgets/catalog/components/{componentId}` | Full component detail (stories with code, props with TS types) |
| `modyo://widgets/catalog/patterns` | Lightweight list of official patterns |
| `modyo://widgets/catalog/patterns/{patternId}` | Full MDX content of the pattern |

Documentation resources (`modyo://docs/...`) are cross-cutting: they remain available even when their module is filtered out with `MODYO_MCP_MODULES`.

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
| `widgets-init-project` | Initialize a new widget project (React + Dynamic UI) from the canonical template, via the `widgets-scaffold` tool |

Module-bound prompts only appear when their module is active (see [Module filtering](#module-filtering-and-read-only-mode)).

## Widget generation

The Widgets module enables assisted generation of transactional widgets (React + Dynamic UI). The entry point is `widgets-scaffold`, which creates a new widget project by cloning the canonical template (`dynamic-framework/dynamic-react-vite-base-template`) at the tag pinned by the server's compatibility matrix.

### Two-step flow

1. The operator invokes the `widgets-init-project` prompt (an MCP client slash command), whose only effect is to have the agent run `widgets-scaffold`.
2. The operator provides the widget's functional description on the next turn. The agent does not write any widget code before receiving it.

`widgets-scaffold` takes two arguments: `name` (strict kebab-case; it is a **project name**, never a feature description) and `targetDir` (optional; parent directory where `./<name>/` is created). Its deterministic sequence is: clone at the pinned tag → strip the template's git history → `git init` + initial commit → rename `package.json` → `npm install`.

### Fail-closed preconditions

The tool fails closed, touching nothing, if:

- The target directory already exists.
- The target is **anywhere inside another widget project** (root or subdirectory — it detects `@dynamic-framework/ui-react` in the dependencies of any ancestor).
- `targetDir` does not exist or is not a directory.
- Git is not available.

The distinguishing guarantee is **anti-nesting**: it never creates a widget inside another one, nor reinterprets the name as a feature of an existing widget.

### Validation and deployment

The flow ends with validation via `widgets-validate` (scored report; target ≥ 95%) plus a local smoke test (`npm run dev`).

**Deployment is not an MCP operation.** To ship the widget to Modyo there are two paths, both outside the agent:

- **CI from the widget's repo** (the scaffold initializes git precisely to enable this path).
- **An explicit, manual `modyo-cli push`** by the developer in their shell.

The agent never pushes and never reads credentials (`MODYO_TOKEN`, `.env`, `.modyo`).

:::tip Compatibility matrix
The source of truth for versions is the server. Current reference values: Dynamic UI `2.6.0`, template `v1.1.0`, validator `0.2.0`.
:::

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

**Widget generation** (two-step flow):

*Step 1 — invoke the client prompt* (not a natural-language sentence):

    /mcp__modyo__widgets-init-project transfer-detail

Syntax depends on the client (in OpenCode it is `/modyo:widgets-init-project transfer-detail`); without the argument, the agent asks for the name. The agent runs `widgets-scaffold`: it creates `./transfer-detail/` under the working directory — mention a different location in the conversation if you need one — and stops, without inspecting or touching other widgets in the folder.

*Step 2 — describe the functionality on the next turn:*

> "The widget shows the detail of a transfer: amount, date, source, destination and status, with actions to repeat or schedule"

Only with this description does the agent consult the patterns catalog and generate the code.

::: warning The slash command is deliberate
"Initialize a widget" in natural language is ambiguous (it can be read as a Channels widget definition) and leaves it to the agent's judgment not to explore or modify existing widgets. The prompt removes both ambiguities.
:::

**Risk-free auditing** (requires starting the server with `MODYO_MCP_MODULES=channels` + `MODYO_READ_ONLY=true`):

> "Audit site 5: review pages, widgets, and templates without modifying anything"

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

### The server won't start after configuring modules

If you set `MODYO_MCP_MODULES` and the server exits immediately with exit code 1 and a message like:

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

the cause is a typo or an unsupported value in the list. The fail-loud is intentional: fix the value (valid ones are `core`, `content`, `channels`, `customers`, `widgets`) and start again.

### A tool returns `readOnly: true, rejected: ...`

The server is running with `MODYO_READ_ONLY=true`. This is a controlled rejection, not a bug: in read-only mode, mutating actions are blocked even if the token has write permissions. If you need to run the mutation, restart the server without that variable.

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

- NPM package: [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)
- MCP specification: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Other Modyo tools: [CLI](/en/platform/tools/cli.html), [SDK](/en/platform/tools/sdk.html)
