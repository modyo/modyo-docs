---
search: true
---

# MCP Server

The Modyo MCP (Model Context Protocol) Server is a tool based on two fundamental principles: AI integration and platform automation, implemented through natural language commands that interact directly with Modyo platform APIs.

## Benefits of the MCP Server

- **Multi-Platform Support**: Allows you to connect to multiple Modyo instances simultaneously from a single configuration.
- **110+ Tools**: Provides comprehensive API coverage for content, channels, customers, and admin operations.
- **Secure Authentication**: Uses token-based authentication per platform for secure access.
- **Universal Client Support**: Works with Claude Code, VS Code, Cursor, and other MCP-compatible clients.

## Modules

The server is organized into four independent modules:

| Module | Description | Port (HTTP) | Status |
|--------|-------------|-------------|--------|
| **Content** | Headless CMS - spaces, entries, types, assets, categories | 3001 | Beta |
| **Channels** | Digital Experience - sites, pages, widgets, templates, navigation | 3002 | Alpha |
| **Customers** | Identity Management - realms, users, forms, submissions | 3003 | Alpha |
| **Admin** | Platform Administration - team users, groups, roles, settings | 3004 | Beta |

## Installation

To use the Modyo MCP Server, you must first clone and build the project on your local machine. This will enable the MCP servers that allow AI assistants to interact with your Modyo platforms.

:::warning Important
The repository is currently private and only accessible to Modyo internal team members. Contact your administrator if you need access.
:::

```bash
$ git clone https://github.com/modyo/modyo-mcp
$ cd modyo-mcp
$ pnpm install
$ pnpm run build
```

:::tip Tip
You can also use `npm` instead of `pnpm`, but pnpm is recommended for faster installs and better disk usage.
:::

## Environment Configuration

The next step is to configure your platforms to facilitate interaction with the Modyo API. Although you can specify parameters directly in tool calls, it's recommended to define a configuration file with your platform credentials.

### Previous actions

- **Get a Modyo access token**: To get the token, you need to have a user or [create one](/en/platform/core/roles.html#create-user) with at least the [role](/en/platform/core/roles.html#roles) of `developer` on the sites, spaces, or realms where you'll interact. Once the user is created, you can [configure an access token](/en/platform/core/api.html#authentication) for them.

- **Identify your platform URL**: Get the base URL of your Modyo organization (e.g., `https://my-company.modyo.com`).

### platforms.json file configuration

Create a configuration file at `~/.platforms.json` with the following structure:

```json
{
  "platforms": {
    "production": {
      "name": "Production",
      "url": "https://my-company.modyo.com",
      "token": "your_production_api_token"
    },
    "staging": {
      "name": "Staging",
      "url": "https://staging.my-company.modyo.com",
      "token": "your_staging_api_token"
    }
  }
}
```

### Description of configuration fields

- `platforms` Object containing all your platform configurations.
- `production` (or any key) Platform identifier used in tool calls. Must be lowercase, alphanumeric, with hyphens or underscores only.
- `name` Human-readable name for the platform.
- `url` Base URL of your Modyo organization.
- `token` User access token for API authentication.

:::warning Important
Platform keys must be lowercase, using only alphanumeric characters, hyphens, and underscores. They must start and end with a letter or number.
:::

## Starting the Servers

To start all servers simultaneously:

```bash
$ pnpm start
```

Or start individual servers as needed:

```bash
$ pnpm start:content    # Port 3001
$ pnpm start:channels   # Port 3002
$ pnpm start:customers  # Port 3003
$ pnpm start:admin      # Port 3004
```

For development with hot-reload:

```bash
$ pnpm dev
```

:::tip Recommendation
Run the server in HTTP mode (`pnpm start` or `pnpm dev`) to see errors and debug logs directly in your console. This is especially useful when troubleshooting issues or when you have debug mode enabled in the MCP server.
:::

## Client Configuration

### Claude Code

To configure Claude Code with HTTP transport:

```bash
$ claude mcp add modyo-content --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3001/mcp
$ claude mcp add modyo-channels --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3002/mcp
$ claude mcp add modyo-customers --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3003/mcp
$ claude mcp add modyo-admin --transport http --env MODYO_CONFIG_PATH=~/.platforms.json http://localhost:3004/mcp
```

To configure Claude Code with stdio transport:

```bash
$ claude mcp add modyo-content --env MODYO_CONFIG_PATH=~/.platforms.json node /path/to/modyo-mcp/packages/mcp-content/build/index.js
```

### VS Code

Add to your `.vscode/mcp.json` file:

```json
{
  "servers": {
    "modyo-content": {
      "type": "http",
      "url": "http://localhost:3001/mcp"
    }
  }
}
```

### Cursor

To configure Cursor:

1. Open **Cursor Settings** > **MCP**
2. Click the **Add new MCP Server** button
3. Configure the following fields:
   - Name: `Modyo Content`
   - Type: `HTTP`
   - URL: `http://localhost:3001/mcp`

### Gemini CLI

Add to your `~/.gemini/settings.json` file:

```json
{
  "mcpServers": {
    "modyo-content": {
      "httpUrl": "http://localhost:3001/mcp"
    },
    "modyo-channels": {
      "httpUrl": "http://localhost:3002/mcp"
    },
    "modyo-customers": {
      "httpUrl": "http://localhost:3003/mcp"
    },
    "modyo-admin": {
      "httpUrl": "http://localhost:3004/mcp"
    }
  }
}
```

For stdio transport:

```json
{
  "mcpServers": {
    "modyo-content": {
      "command": "node",
      "args": ["/path/to/modyo-mcp/packages/mcp-content/build/index.js"],
      "env": {
        "MODYO_CONFIG_PATH": "~/.platforms.json"
      }
    }
  }
}
```

:::tip Tip
After modifying `settings.json`, reload your window to activate the MCP servers.
:::

## Tools Reference (High-Level)

The following tools are available with the default `high` abstraction level. These combine multiple operations into smart workflows.

:::tip Tip
Additional low-level tools are available for debugging and advanced use cases. Set `MODYO_ABSTRACTION_LEVEL=low` to access the full 110+ tool catalog.
:::

:::tip Best Practice
Most LLM clients allow you to enable or disable individual tools or entire MCP servers. Keep only the tools you need enabled to maintain a clean context and help the AI focus on what matters. For example, if you're only working with content, enable just the Content module.
:::

### Content Module (mcp-content)

| Tool | Description |
|------|-------------|
| `spaces-manage` | Complete space lifecycle (list/get/create/update/delete) |
| `types-manage` | Content type schema management with field updates |
| `type-update-or-create` | Idempotent type management - creates or updates by UID |
| `entries-manage` | Entry lifecycle including publish/unpublish/archive |
| `entry-update-or-create` | Idempotent entry management - creates or updates by slug |
| `entries-bulk-manage` | Bulk operations with preview |
| `assets-manage` | Asset binary and metadata management |
| `categories-manage` | Category hierarchy management |

### Channels Module (mcp-channels)

| Tool | Description |
|------|-------------|
| `page-widget-manage` | Complete widget page lifecycle |
| `page-content-manage` | Complete content page lifecycle |
| `widget-definition-update-or-create` | Idempotent widget management |
| `template-update-or-create` | Idempotent template management |
| `template-find` | Find templates by name or category |
| `smart-publish` | One-step publishing workflow |

### Customers Module (mcp-customers)

| Tool | Description |
|------|-------------|
| `realms-manage` | Complete realm lifecycle |
| `realm-user-manage` | Customer user management |
| `realm-users-bulk-manage` | Bulk user operations with preview |
| `origination-step-manage` | Origination step configuration |
| `origination-rules-manage` | Origination rules configuration |
| `origination-step-clone` | Clone origination steps |

### Admin Module (mcp-admin)

| Tool | Description |
|------|-------------|
| `admin-users-manage` | Complete team user lifecycle (list/create/update/sessions) |
| `admin-users-update-or-create` | Idempotent user operations |
| `admin-users-bulk-manage` | Bulk activate/deactivate with preview |
| `admin-groups-manage` | Complete group lifecycle |
| `admin-groups-update-or-create` | Idempotent group operations |
| `admin-roles-list` | List available roles by context |
| `platforms-list` | List configured platforms |
| `settings-get` | Read platform settings |
| `settings-manage` | Update platform settings |

## Abstraction Levels

The MCP server supports different abstraction levels to balance simplicity versus control:

| Level | Tools | Use Case |
|-------|-------|----------|
| `high` | ~15/module | **Default** - Smart workflows, reduced context |
| `low` | 110+ total | Full API control, verbose responses |

If not set, the abstraction level defaults to `high`. To change it, add the following environment variable to your MCP client configuration:

```json
"env": {
  "MODYO_ABSTRACTION_LEVEL": "high"
}
```

## Usage Examples

Once configured, you can interact with Modyo using natural language:

```
"List all spaces in my production platform"

"Create a content type called 'Products' with fields: name (text), price (number)"

"Create an entry in the blog space with title 'Hello World'"

"Show all published widgets for site ID 5"

"Publish all pending pages and widgets for site 4605"
```

## Environment Variables

- `MODYO_CONFIG_PATH` Path to platforms.json (default: `~/.platforms.json`).
- `MODYO_ABSTRACTION_LEVEL` Tool filtering level (default: `high`).
- `DANGEROUSLY_OMIT_AUTH` Skip authentication for testing only (default: `false`).

## MCP Inspector

You can test the server without a client using the built-in inspector:

```bash
$ cd packages/mcp-content
$ pnpm run inspect
```

This opens a visual interface at `http://localhost:5173` where you can browse available tools, inspect schemas and responses, and test platform connections.

## Troubleshooting

### "Organization not found" errors

- Verify that `platformSlug` matches a key in `~/.platforms.json`
- Check the `MODYO_CONFIG_PATH` environment variable
- Ensure the JSON file is valid

### Tools not visible

1. Verify the build completed successfully: `ls packages/*/build/index.js`
2. Check that paths in MCP configuration are absolute
3. Restart your MCP client
4. Check MCP client logs for errors

### Authentication errors

- Verify API tokens have correct permissions
- Check token format in platforms.json
- Ensure API endpoints are correct

:::warning Attention
The token owner user must have appropriate permissions for the operations you want to perform. Verify that your token has access to the required modules (Content, Channels, Customers, or Admin).
:::
