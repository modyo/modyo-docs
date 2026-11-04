---
search: true
---

# Modyo MCP

## What it is

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io) is an open standard for connecting AI assistants to tools and data sources. The **Modyo MCP Server** connects an AI assistant to the Modyo Admin API so you can manage the platform (content, sites, widgets, customers, and administration) and build widgets with Dynamic Framework through natural-language conversation.

It is distributed as the npm package [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp) and runs as a local process that the AI client launches over stdio. This page describes version 0.5.10.

To build a widget end to end with the MCP, see [Develop widgets with the MCP](/en/platform/tools/mcp-widgets.html).

## Requirements

- Node.js 22 or later.
- A Modyo instance.
- An admin token, created in Modyo Admin → Settings → API Access. The MCP operates with the permissions of the user who owns the token (see [Token permissions](#token-permissions)).

## Installation

The client launches the server with the command `npx -y @modyo/mcp` and passes it the `MODYO_URL` and `MODYO_TOKEN` environment variables. Installing means registering that command in the client's configuration.

| Client | Where it is configured | Client documentation |
|---|---|---|
| Claude Code | `claude mcp add` command | [Claude Code: MCP](https://code.claude.com/docs/en/mcp) |
| Claude Desktop | `claude_desktop_config.json` | [Connect to local MCP servers](https://modelcontextprotocol.io/docs/develop/connect-local-servers) |
| Cursor | `~/.cursor/mcp.json` | [Cursor: MCP](https://cursor.com/docs/context/mcp) |
| GitHub Copilot in VS Code | `MCP: Add Server` → `~/.copilot/mcp-config.json` | [Add MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) |
| GitHub Copilot CLI | `copilot mcp add` command → `~/.copilot/mcp-config.json` | [Adding MCP servers to Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers) |
| Other clients | Depends on the client | See [Other clients](#other-clients) |

In the examples, replace `https://my-company.modyo.cloud` with your platform URL and `your-admin-token` with your token.

### Claude Code

```bash
claude mcp add modyo --scope user \
  --env MODYO_URL=https://my-company.modyo.cloud \
  --env MODYO_TOKEN=your-admin-token \
  -- npx -y @modyo/mcp
```

With `--scope user`, the server is available in all your projects and the configuration is stored in `~/.claude.json`, outside any repository. The `--env` options go after the server name and before `--`.

To verify the registration:

```bash
claude mcp list
```

The server appears as `modyo: npx -y @modyo/mcp - ✔ Connected`. Inside a session, `/mcp` shows the server and its number of tools.

To share the configuration with a team through the repository, create a `.mcp.json` at the project root that reads credentials from each person's environment instead of writing them in the file:

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "${MODYO_URL}",
        "MODYO_TOKEN": "${MODYO_TOKEN}"
      }
    }
  }
}
```

Claude Code replaces `${MODYO_URL}` and `${MODYO_TOKEN}` with the session's environment variables. The first time the project is opened, the server shows as `⏸ Pending approval` until you approve it.

### Claude Desktop

In Claude Desktop, open **Settings** → **Developer** → **Edit Config**. This opens (or creates) `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "modyo": {
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://my-company.modyo.cloud",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

If the file already has other servers, add only the `modyo` entry inside `mcpServers`. Save, quit Claude Desktop completely, and reopen it. The server and its tools appear under **Connectors** → **Manage connectors**.

### Cursor

Edit `~/.cursor/mcp.json` for all your projects, or `.cursor/mcp.json` for a single project:

```json
{
  "mcpServers": {
    "modyo": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://my-company.modyo.cloud",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

You enable and review the server from **Customize** in Cursor's sidebar.

### GitHub Copilot in VS Code

1. Open the command palette and run **MCP: Add Server**.
2. Choose **Command (stdio)** and enter `npx -y @modyo/mcp` as the command.
3. When the flow asks for the name, enter `modyo`. If you leave it empty, VS Code assigns a generic name.
4. As the target, choose **Global** → **Copilot Global**.

VS Code stores the server in `~/.copilot/mcp-config.json`. It is the same file [GitHub Copilot CLI](#github-copilot-cli) uses: a server added in one shows up in the other. Add the credentials in an `env` block inside the entry:

```json
{
  "mcpServers": {
    "modyo": {
      "tools": ["*"],
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modyo/mcp"],
      "env": {
        "MODYO_URL": "https://my-company.modyo.cloud",
        "MODYO_TOKEN": "your-admin-token"
      }
    }
  }
}
```

To start the server, run **MCP: List Servers**, choose `modyo`, and then **Start Server**. You can see the tools in the chat, in **Agent** mode, under **Configure Tools**.

:::tip VS Code tool limit
A VS Code chat request supports up to 128 enabled tools. If you use the Modyo MCP alongside other servers, you can limit its modules with [`MODYO_MCP_MODULES`](#filtering-by-modules).
:::

### GitHub Copilot CLI

```bash
copilot mcp add modyo \
  --env MODYO_URL=https://my-company.modyo.cloud \
  --env MODYO_TOKEN=your-admin-token \
  -- npx -y @modyo/mcp
```

The `--env` options go before `--`. The `copilot mcp` subcommand requires a recent version of Copilot CLI: if your version does not recognize it, update the CLI.

The server is stored in `~/.copilot/mcp-config.json`, the same file [GitHub Copilot in VS Code](#github-copilot-in-vs-code) uses. To verify it, run `/mcp show modyo` inside a Copilot CLI session: it shows the server status and its tools.

### Other clients

Any MCP client that launches local servers over stdio is configured with the same three values. The file format depends on the client: see its documentation.

```
command: npx
args: ["-y", "@modyo/mcp"]
env:
  MODYO_URL: https://my-company.modyo.cloud
  MODYO_TOKEN: your-admin-token
```

Some clients do not pass your terminal's environment variables to the server, or discard those that look like secrets, such as variables containing `TOKEN`. Declare `MODYO_URL` and `MODYO_TOKEN` in the server configuration, not only in your terminal.

## Configuration

The server is configured with environment variables, in the client's `env` block.

| Variable | Required | Description |
|---|---|---|
| `MODYO_URL` | Yes | Platform URL, for example `https://my-company.modyo.cloud`. |
| `MODYO_TOKEN` | Yes | Admin token (Modyo Admin → Settings → API Access). |
| `MODYO_PLATFORM_NAME` | No | Display name of the platform. Defaults to `default`. |
| `MODYO_MCP_MODULES` | No | Active modules, comma-separated: `core`, `content`, `channels`, `customers`, `widgets`. If unset, all are active. See [Filtering by modules](#filtering-by-modules). |
| `MODYO_READ_ONLY` | No | With the exact value `true`, enables read-only mode. See [Read-only mode](#read-only-mode). |
| `MODYO_DEFAULT_SITE_THEME` | No | ID of the theme used when creating a site without specifying one. Defaults to `208`; the matching ID depends on your instance. The theme is applied only when the site is created. |
| `DEBUG` | No | With `true` or `1`, the server writes debug logs to stderr, with sensitive values masked. |

### Without credentials

Without `MODYO_URL` and `MODYO_TOKEN`, the server still starts and lists all its tools, resources, and prompts. On startup, it writes this to its log:

```
No platform configured. Set MODYO_URL and MODYO_TOKEN environment variables.
```

The Widgets module tools work without credentials. All the others respond with an error:

```
Platform not configured. Set MODYO_URL and MODYO_TOKEN environment variables.
```

## Security and control

### Token permissions

:::warning Permissions
The MCP operates with the same permissions as the admin user who owns the `MODYO_TOKEN`. An agent with that token can create, modify, and delete content, sites, widgets, users, and settings. **Use the token of a user with the minimum permissions required** and review the agent's actions before approving destructive operations. In production, consider a dedicated admin user with a restricted role.
:::

Admin API tokens do not expire and the platform does not renew them: the `MODYO_TOKEN` remains valid until someone deletes it from the console. Rotating it is a manual task. See [Access token lifecycle](/en/platform/core/api.html#access-token-lifecycle).

### Read-only mode

With `MODYO_READ_ONLY=true`, the server does not make any change on the platform, even if the token has write permissions. Any other value, or the absence of the variable, is equivalent to normal behavior. It is useful for auditing or exploring a production site with no risk of modifying it.

It works in two layers:

1. Tools that only write or delete are not registered: the client does not see them.
2. Tools that group several actions (for example, the `*-manage` tools) remain available, but only run read actions: `list`, `get`, `search`, `find`, and `status`. The `manage` action with no fields that change anything acts as a read.

A rejected action is not an error (`isError: false`). The response carries the rejection in `control`:

```json
{
  "control": {
    "readOnly": true,
    "rejected": "create",
    "reason": "Server running in read-only mode (MODYO_READ_ONLY). Only read actions are permitted."
  }
}
```

Prompts remain listed in read-only mode, but the steps that write are rejected.

### Filtering by modules

`MODYO_MCP_MODULES` defines which modules are enabled, as a comma-separated list. Valid values: `core`, `content`, `channels`, `customers`, `widgets`. Without the variable, all modules are active.

The filter applies to the tools, resources, prompts, and instructions the server sends to the agent. The cross-module resources (`platforms://list`, `modyo://context/agent-rules`, and the widgets guide) remain available with any filter. A prompt that needs two modules only appears if both are active: `modyo-create-blog` requires `channels` and `content`.

An invalid value stops startup with an explicit message:

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

### Combinations

The two variables can be combined. To audit a site with no risk of modifying it, use `MODYO_MCP_MODULES=channels` with `MODYO_READ_ONLY=true`:

```json
"env": {
  "MODYO_URL": "https://my-company.modyo.cloud",
  "MODYO_TOKEN": "your-admin-token",
  "MODYO_MCP_MODULES": "channels",
  "MODYO_READ_ONLY": "true"
}
```

Tools the client lists for each configuration, in version 0.5.10:

| Configuration | Tools |
|---|---|
| No variables | 82 |
| `MODYO_READ_ONLY=true` | 48 |
| `MODYO_MCP_MODULES=widgets` | 5 |
| `MODYO_MCP_MODULES=widgets` and `MODYO_READ_ONLY=true` | 4 |
| `MODYO_MCP_MODULES=channels` and `MODYO_READ_ONLY=true` | 16 |

The startup log confirms the active configuration. With `MODYO_MCP_MODULES=widgets`:

```
Module filtering active. Modules enabled: widgets. Filtered out: core, content, channels, customers.
Tools: 5 (filtered from 82). Resources: 7 (filtered from 10). Prompts: 1 (filtered from 9).
```

In that line, "Resources" counts resources and resource templates together. With `MODYO_READ_ONLY=true`:

```
Read-only mode active (MODYO_READ_ONLY). Read tools exposed: 22. Multi-action tools gated: 26. Write/destroy tools skipped: 34.
```

### Delete confirmation

Tools that delete resources ask for confirmation:

- In clients with interactive confirmation, the tool asks you to confirm before deleting. If the confirmation times out or fails, nothing is deleted.
- In clients without interactive confirmation, a call without `confirmed: true` does nothing and responds with what it would delete, in `control.aborted`. To run the deletion, repeat the call with `confirmed: true`.

Archiving a widget definition also asks for confirmation, because it removes its instances from the site's pages.

### Write responses

- **What was saved.** After writing, the tools re-read the resource and respond with that state. If a requested field was not saved, they respond with `FIELDS_NOT_PERSISTED` or `UNSUPPORTED_FIELD`. A parameter the action does not use comes back in `ignored`.
- **Background operations.** Operations that continue on the platform respond with `queued` or `deletion_started`.
- **Exact identifiers.** Actions that write or delete resolve the resource only by exact id, UUID, path, or slug. A read with several candidates responds with `AMBIGUOUS_IDENTIFIER` and the list. For an entry with several translations, the tool asks for the locale (`LOCALE_REQUIRED`).

## What it can do

The server exposes three kinds of capabilities: **tools** (actions the agent runs), **resources** (information the agent looks up by URI), and **prompts** (guided workflows the person invokes). The client lists the details of each: every tool comes with its description and its `inputSchema`, which the agent reads before using it.

Tools follow the `{module}-{resource}-{action}` convention, for example `content-spaces-list` or `channels-pages-create`.

### Core

Account administration: admin users, groups, roles, memberships, and platform settings.

- `core-groups-manage`: creates, updates, deletes, and lists admin groups, and adds or removes users from a group.
- `core-groups-upsert`: creates or updates a group by name, with its full list of users.
- `core-members-manage`: assigns, changes, or removes users and groups in sites, spaces, and realms, and lists members with their role.
- `core-roles-create`: creates a role, with optional permission groups.
- `core-roles-manage`: lists roles by context: account, site, space, or realm.
- `core-settings-manage`: updates platform settings: name, host, language, CORS, logo, favicon, default site, SEO files, and admin colors.
- `core-users-bulk`: activates or deactivates admins in bulk.
- `core-users-manage`: creates, updates, and lists admins, retrieves their sessions, and shows the token's user.
- `core-users-upsert`: creates or updates an admin, looked up by email or username.

### Content

Spaces, content types, categories, entries, and assets.

- `content-spaces-list`: lists the platform's spaces.
- `content-spaces-get`: shows a space with its settings and languages.
- `content-spaces-manage`: creates, updates, and deletes spaces, and assigns a realm to a space that has none.
- `content-spaces-copy`: clones a whole space: content types, categories, entries in every language (as drafts), and assets.
- `content-types-list`: lists a space's content types.
- `content-types-get`: shows a content type's schema with its fields.
- `content-types-manage`: manages a content type's schema and adds or removes fields.
- `content-types-upsert`: creates or updates a content type by its UID.
- `content-types-copy`: copies a content type to another space, with or without its entries.
- `content-categories-list`: lists a space's categories with their hierarchy.
- `content-categories-get`: shows a category and its place in the hierarchy.
- `content-categories-manage`: creates, retrieves, updates, deletes, and lists categories.
- `content-entries-list`: lists a space's entries.
- `content-entries-get`: shows one translation of an entry with its values.
- `content-entries-manage`: creates, updates, translates, publishes, unpublishes, archives, restores, clones, and deletes entries.
- `content-entries-upsert`: creates or updates an entry by its slug, in a content type and a language.
- `content-entries-bulk`: publishes, unpublishes, archives, restores, or deletes entries in bulk, in one language.
- `content-assets-list`: lists a space's assets.
- `content-assets-get`: shows an asset with its metadata and URL.
- `content-assets-manage`: retrieves and updates an asset's metadata, replaces its file, deletes it, or lists assets.
- `content-assets-bulk`: uploads several assets at once.
- `content-jobs-manage`: checks the status of space copies and site downloads started from the MCP.

### Channels

Sites, pages, templates, widget definitions, menus, variables, and publishing.

- `channels-sites-overview`: shows a site's map: pages, templates, menus, and widget definitions.
- `channels-sites-manage`: creates, updates, clones, and deletes sites, and creates their stages.
- `channels-site-assets-manage`: uploads one or more assets to a site.
- `channels-pages-create`: creates a widget, content, or origination page.
- `channels-pages-copy`: copies a page within the same site or to another one.
- `channels-pages-manage`: retrieves, updates, archives, restores, unpublishes, deletes, and lists pages.
- `channels-pages-content`: manages content pages and their Liquid templates.
- `channels-pages-widget`: creates or locates a widget page and replaces its full widget composition.
- `channels-pages-widget-instance`: adds, retrieves, updates, or removes a single widget on a page.
- `channels-pages-widget-variables`: lists, retrieves, sets, and removes a custom widget's variables on a page.
- `channels-templates-find`: finds a template by name and category.
- `channels-templates-search`: searches templates' code with regular expressions.
- `channels-templates-manage`: manages a site's templates: layouts, CSS, JavaScript, and snippets.
- `channels-templates-upsert`: creates or updates a template by name and category.
- `channels-templates-replace`: searches and replaces in templates' code, with a preview of the changes.
- `channels-templates-copy`: copies a template to another site.
- `channels-account-templates-manage`: manages the account's global templates.
- `channels-widgets-manage`: creates, updates, clones, unpublishes, archives, restores, deletes, and lists widget definitions.
- `channels-widgets-upsert`: creates or updates a widget definition by its name.
- `channels-widgets-code-edit`: edits one section of a widget definition's code (HTML, CSS, or JavaScript) without resending the others.
- `channels-widgets-copy`: copies a widget definition to another site.
- `channels-variables-manage`: manages global variables for the account, the site, and widgets.
- `channels-publish`: publishes changes in one step, with a prior dry run and in dependency order.
- `channels-menus-manage`: creates, retrieves, renames, archives, unpublishes, deletes, and lists menus.
- `channels-menu-items-manage`: manages a menu's items, including nested ones.
- `channels-menus-copy`: copies a menu with all its items to the same site or to another one.
- `channels-locks-manage`: acquires, releases, and checks edit locks on pages, templates, widgets, and entries.
- `channels-download`: downloads a site's context as a ZIP file.
- `channels-preview`: generates preview URLs for pages and widgets.

### Customers

Realms, users, segments, forms, data sets, and originations.

- `customers-realms-manage`: lists, retrieves, creates, and updates realms, and changes their logo.
- `customers-realms-delete`: deletes a realm and its stages.
- `customers-users-list`: lists a realm's users, with filters.
- `customers-users-manage`: creates or updates a realm user.
- `customers-users-bulk`: creates or updates users in bulk, by email.
- `customers-segments-manage`: manages dynamic segments and counts the users that match their filters.
- `customers-forms-manage`: creates, updates, deletes, enables, and disables forms with their questions.
- `customers-forms-copy`: copies a form to another realm with its questions.
- `customers-submissions-manage`: lists, retrieves, creates, and updates submissions, changes their status, and assigns them.
- `customers-submissions-bulk`: operates on submissions in bulk, with a preview.
- `customers-datasets-manage`: manages simple or nested data sets.
- `customers-datasets-copy`: copies a data set to another realm with all its options.
- `customers-originations-manage`: creates, updates, publishes, unpublishes, archives, deletes, and lists originations.
- `customers-originations-validate`: checks an origination's structure and reports errors and warnings.
- `customers-origination-steps-manage`: creates or updates an origination's steps with their tasks and questions.
- `customers-origination-steps-clone`: clones steps with their tasks, questions, and options within the same origination or into another one.
- `customers-origination-rules-manage`: manages the rules that show or hide elements of an origination.

### Widgets

Building widgets with Dynamic Framework: component and pattern catalog, project creation, and validation. The tools in this module do not need credentials.

- `widgets-list-components`: lists the Dynamic UI catalog: components, contexts, and hooks.
- `widgets-get-component-props`: returns the full definition of a Dynamic UI component, subcomponent, context, or hook.
- `widgets-list-patterns`: lists the composition patterns published in the Dynamic UI Storybook.
- `widgets-scaffold`: creates a new widget project from the Dynamic base template.
- `widgets-validate`: validates a widget against Dynamic UI conventions, accessibility, data states, error handling, and tests.

### What the MCP does not cover

For these tasks, use Modyo Admin. The server also tells the agent so.

- **Core:** removing another admin's second factor; account security (mandatory second factor, password policy, session expiration); identity providers (SSO) and SCIM; API access applications and their tokens; account webhooks and assets; activity logs and reports; viewing a role's permissions, editing roles, and deleting them.
- **Content:** team review of entries; scheduling publication or unpublication; version history, diffs, and restoring; previewing an entry; bulk editing and creation; reindexing a content type.
- **Channels:** team review (with team review enabled, `channels-publish` only publishes what is approved); version history, diffs, and rollback; scheduling a release's publication; redirects; page activity and comments; listing, editing, and deleting site assets (`channels-site-assets-manage` only uploads them); publishing global snippets (`channels-account-templates-manage` saves them without publishing); syncing stages; downloading a widget definition as a ZIP file; changing a site's host and its `llms.txt` settings; widget definition owners.
- **Customers:** realm domains and security headers; restricting team members to segments; deleting users, viewing or revoking their sessions, user notes, and impersonation; custom user fields; form responses and statistics; scheduling an origination's publication; origination version history, diffs, and rollback; realm stages and their sync; deleting submissions or task responses and submission invitations; messaging campaigns and their email templates; realm integrations (identity providers, OAuth clients) and webhooks; payments and orders.

### Resources

| URI | Module | Content |
|---|---|---|
| `platforms://list` | Cross-module | Configured platforms. |
| `modyo://context/agent-rules` | Cross-module | Operating rules for the agent. |
| `modyo://docs/widgets/{widgetPath}` | Cross-module | Widgets guide for the agent. Entry point: `modyo://docs/widgets/INDEX`. |
| `modyo-spaces://list` | Content | All spaces. |
| `modyo-realms://list` | Customers | All realms. |
| `modyo://liquid-reference` | Channels | Liquid reference: objects, properties, filters, and tags, with what is available in each context. |
| `modyo://widgets/catalog/components` | Widgets | List of Dynamic UI components. |
| `modyo://widgets/catalog/components/{componentId}` | Widgets | Component detail: stories with code and props with types. |
| `modyo://widgets/catalog/patterns` | Widgets | List of patterns. |
| `modyo://widgets/catalog/patterns/{patternId}` | Widgets | Full content of a pattern. |

The widgets catalogs correspond to the Dynamic UI version the server pins.

### Prompts

Prompts are guided workflows that the person invokes from the client, usually as a slash command. Each one appears only if its modules are active.

| Prompt | Modules | Workflow |
|---|---|---|
| `modyo-create-space` | Content | Create a space with its base structure. |
| `modyo-setup-site` | Channels | Create a site with its settings and initial pages. |
| `modyo-create-widget-page` | Channels | Create a page that hosts a widget definition. |
| `modyo-create-content-page` | Channels | Create a page that lists the entries of a content type. |
| `modyo-create-widget-definition` | Channels | Create a widget definition with starter code. |
| `modyo-manage-templates` | Channels | Edit a site's Liquid templates: layouts, snippets, and stylesheets. |
| `modyo-manage-releases` | Channels | Review pending changes and publish a release. |
| `modyo-create-blog` | Channels and Content | Create a blog: space, "Post" content type, and initial entries. |
| `widgets-init-project` | Widgets | Create a new widget project with `widgets-scaffold`. |

### Response shape

For those integrating the MCP with their own code: all tools publish an `outputSchema` and respond with `structuredContent`. The response carries `platform` (the platform used), `data` (the result) and, when applicable, `resource`, `state` (for example `returned`, `total`, and `complete` in listings), and `control` (rejections, confirmations, and ignored parameters).

## Usage examples

Once the server is configured, talk to the agent in natural language.

**Exploration**

> "List all the spaces on my platform"
>
> "What pages does site 1001 have?"
>
> "Show me the content types in the `blog` space"

**Creating and editing**

> "Create a content type called 'Products' with the fields `name` (text), `price` (number), and `description` (rich text)"
>
> "Create a `/about` page on the `marketing` site with the `base` layout"
>
> "Add a 'Contact' item pointing to `/contact` to the main menu of site 1001"
>
> "Change the primary color in the `root.css` of the `marketing` site to `#ff6600`"

**Publishing**

> "Show me the pending changes for site 1001 and publish them"
>
> "Unpublish the `/promo` page on the `marketing` site"

**Users**

> "Create the admin `user@my-company.com` with the `site editor` role on the `marketing` site"
>
> "List the users in the `my-realm` realm"

**Risk-free audit** (with `MODYO_MCP_MODULES=channels` and `MODYO_READ_ONLY=true`)

> "Audit site 1001: review pages, widgets, and templates without modifying anything"

**Widgets**

A new widget starts with the `widgets-init-project` prompt, invoked as a client slash command (in Claude Code, `/mcp__modyo__widgets-init-project my-widget`), and continues with the description of the functionality in the next turn. The full workflow is in [Develop widgets with the MCP](/en/platform/tools/mcp-widgets.html).

## Troubleshooting

### The agent responds "Platform not configured"

The server is missing `MODYO_URL` or `MODYO_TOKEN`. Check that both are in the `env` block of the client configuration and restart the client. To test the token directly against the API:

```bash
curl -H "Authorization: Bearer $MODYO_TOKEN" "$MODYO_URL/api/admin/profile"
```

With a valid token, the API responds `200` with the user who owns the token. Otherwise, create a new token in Modyo Admin → Settings → API Access.

### The server does not start after setting MODYO_MCP_MODULES

If the server exits on startup with a message like this:

```
Error: Invalid module(s) in MODYO_MCP_MODULES: 'widgetz'.
Valid values: core, content, channels, customers, widgets.
```

the list has a value that does not exist. Fix it (the valid values are `core`, `content`, `channels`, `customers`, and `widgets`) and restart the client.

### A tool responds readOnly: true

The server is running with `MODYO_READ_ONLY=true` and the requested action writes to the platform. This is not an error: the rejection arrives in `control` with `isError: false`. To run the action, remove the variable and restart the client.

### The agent says it did not delete anything

In clients without interactive confirmation, a deletion without `confirmed: true` is not executed: the response carries in `control.aborted` what would have been deleted. Review the list and ask the agent to repeat the operation with confirmation.

### The agent does not see the tools

Restart the client: tools are discovered when the client starts the server. In Claude Code, `claude mcp list` shows whether the server is connected.

### Viewing the server logs

Add `DEBUG=true` to the client's `env` block. The server writes its logs to stderr, and each client shows them in a different place. In Claude Desktop, for example, they go to `~/Library/Logs/Claude/mcp-server-modyo.log` (macOS) or `%APPDATA%\Claude\logs` (Windows).

## Related links

- Guide: [Develop widgets with the MCP](/en/platform/tools/mcp-widgets.html)
- npm package: [`@modyo/mcp`](https://www.npmjs.com/package/@modyo/mcp)
- MCP specification: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- Other Modyo tools: [CLI](/en/platform/tools/cli.html), [SDK](/en/platform/tools/sdk.html)
