---
search: true
---

# Develop widgets with the MCP

## What you get

With the Widgets module of the [Modyo MCP](/en/platform/tools/mcp.html), an AI agent creates a widget from the Dynamic Framework base template, builds it with the components and patterns of the Dynamic UI catalog, and validates it against the Dynamic version the MCP pins. The result is a project with its manifest (`widget.manifest.json`), ready to publish to Modyo.

This guide describes the workflow. The Dynamic concepts (components, theming, project structure) are covered in the Dynamic Framework documentation: [Project Structure](/en/dynamic/getting-started/project-structure.html) and [Theming](/en/dynamic/customization/theming.html).

## Before you start

- **The MCP installed** in your client (see [Installation](/en/platform/tools/mcp.html#installation)). The Widgets module is enough for this workflow (`MODYO_MCP_MODULES=widgets`), and creating and validating the widget does not require Modyo credentials.
- **Node.js 22** or later.
- **git** with `user.name` and `user.email` configured. Without that identity, the project is created without an initial commit.
- **An access token and a Modyo site** to publish. You do not need to install the Modyo CLI: the project includes the `npm run push` script, which runs it.

## Step-by-step workflow

### 1. Create the project

Invoke the `widgets-init-project` prompt with the project name. It is a client slash command; in Claude Code:

```
/mcp__modyo__widgets-init-project my-widget
```

In other clients, look for `widgets-init-project` among the prompts or slash commands of the `modyo` server. If you omit the name, the agent asks for it.

The prompt has a single effect: the agent runs the `widgets-scaffold` tool and stops. Use the prompt instead of asking in natural language: "create a widget" can be interpreted as a Channels widget definition, and the prompt makes clear that it is a new project, without touching the widgets that already exist.

`widgets-scaffold`:

1. Clones the base template (`dynamic-framework/dynamic-react-vite-base-template`) at the tag the MCP pins.
2. Removes the template's git history.
3. Renames the widget with the project name and version `0.1.0`: in `package.json`, `widget.manifest.json`, and `package-lock.json`, in the mount name, in the CSS class prefix, and in `MODYO_WIDGET_NAME` of `.modyo.example` and `.env.example`.
4. Initializes a new git repository, with an initial commit if git has an identity configured.
5. Installs dependencies with `npm ci`.

The project is created in `./<name>/`, under the agent's working directory. For another location, specify it in the conversation.

**The name** is a project name, not the description of a feature. It is in kebab-case and starts with a letter (`^[a-z][a-z0-9]*(-[a-z0-9]+)*$`), because it is also the CSS class prefix. For example, `my-widget` or `transfer-detail`.

The tool fails without changing anything if:

- the target directory already exists;
- the target is inside another widget project, at its root or in any subdirectory;
- the parent directory does not exist or is not a directory;
- git is not available.

`widgets-scaffold` does not create `.modyo`, does not publish the widget, and does not modify other projects.

### 2. Configure publishing

Copy `.modyo.example` to `.modyo` at the project root and fill in the values:

```bash
cp .modyo.example .modyo
```

| Variable | Value |
|---|---|
| `MODYO_ACCOUNT_URL` | Your account URL, for example `https://my-company.modyo.cloud`. |
| `MODYO_TOKEN` | Access token for publishing. |
| `MODYO_WIDGET_NAME` | Name of the widget in Modyo. The scaffold already filled it in with the project name. |
| `MODYO_SITE_HOST` or `MODYO_SITE_ID` | The site where the widget is published. Use one of the two. |

You do this step yourself. The agent never reads or writes `.modyo`, and the file is in `.gitignore` because it contains the token.

### 3. Describe the widget

In the next turn, describe what the widget has to do:

> "The widget shows the detail of a transfer: amount, date, source, destination, and status, with actions to repeat or schedule it"

Before writing the interface, the agent looks for an official Dynamic UI pattern that solves the case. If it does not find one, it says so and builds the interface using only components from the catalog. To do this it queries the catalog with `widgets-list-components`, `widgets-get-component-props`, and the `modyo://widgets/catalog/*` resources.

### 4. Validate

Ask the agent to validate the widget. The `widgets-validate` tool checks the project against Dynamic UI conventions, accessibility, data states, error handling, and tests, and returns a report with a score, errors, and warnings. The goal is `passing: true`.

- **Rule profile.** The validator chooses it based on `widget.manifest.json`: `domain-1.4` for a widget created with template 1.4 or a later 1.x version, and `type-based` for a widget without a manifest. With a manifest it does not recognize, it fails closed.
- **Stack alignment.** The tool compares the major.minor of `@dynamic-framework/ui-react` in `package.json` with the Dynamic UI version the MCP pins (see [Versions](#versions)). If they do not match, it adds a "Stack Alignment" error and the report is `passing: false`. The check does not apply if `package.json` is missing or if the declared version does not pin a major.minor (for example, `2.x` or a `file:` dependency).
- **A widget on another version.** To validate a widget built on another version of Dynamic UI, ask the agent to skip stack alignment (`allowLegacyStack: true`). All other rules still apply.

Then, test the widget locally:

```bash
npm run dev
```

### 5. Publish

The MCP does not publish widgets. You have two options, both outside the agent:

- **From your terminal**, at the project root:

  ```bash
  npm run push
  ```

  The script builds the widget and uploads it with the Modyo CLI, using the configuration in `.modyo`. See [`modyo-cli push`](/en/platform/tools/cli.html#modyo-cli-push).

- **From CI**, with the git repository the scaffold created.

## Example requests

| Step | Request |
|---|---|
| Create | `/mcp__modyo__widgets-init-project account-summary` (Claude Code) |
| Describe | "The widget shows the balance of each of the user's accounts and their last five transactions" |
| Adjust | "Use `DCard` for each account and show a loading state while the data arrives" |
| Ask | "What props does `DCard.Body` accept?" |
| Validate | "Validate the widget and fix the errors it reports" |
| Prepare to publish | "Check that the project builds before publishing it" |

## Versions

The MCP pins the versions of the widget stack. Each MCP version can change them.

| Modyo MCP | Dynamic UI | Base template | `@modyo/widget-validator` | Modyo CLI (in `npm run push`) |
|---|---|---|---|---|
| 0.5.10 | 2.12.1 | `v1.4.1` | 0.3.1 | 3.6.2 |

The project's `widget.manifest.json` records the Dynamic UI and template versions it was created with.

## Troubleshooting

### widgets-scaffold returns TEMPLATE_MISMATCH

The tool cloned the template but could not finish it: either the template does not match the one the MCP pins, and nothing is renamed, or template identifiers are left after renaming. In both cases the directory is left in place without an initial commit. Delete it and run `widgets-scaffold` again, because the tool does not create a project in a destination that already exists.

### The project name is not accepted

The name has to be in kebab-case and start with a letter: `my-widget` works; `1-widget`, `My_Widget`, and `my--widget` do not.

### The project is not created because the target already exists or is inside another widget

The tool does not reuse directories or create a widget inside another one. Choose another name or ask the agent to create the project in another location, outside any widget project.

### The project has no initial commit

git did not have `user.name` and `user.email` configured. The repository is initialized: configure your identity and make the first commit.

### Validation fails because of Stack Alignment

The widget uses a version of `@dynamic-framework/ui-react` with a different major.minor than the one the MCP pins. Update the dependency to the version in the [Versions](#versions) table, or validate with `allowLegacyStack: true` if the widget must stay on its version.

### Pattern ids do not match

`widgets-list-patterns` reads the latest Dynamic UI Storybook index, while `modyo://widgets/catalog/patterns` serves the patterns of the pinned version. The ids can differ. For a pattern's content, the agent uses the resource.
