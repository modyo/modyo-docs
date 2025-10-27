---
search: true
---

# Modyo CLI

The Modyo Command Line Interface (CLI) is a tool based on two fundamental principles: acceleration and integration, implemented through the `get` and `push` commands, respectively.

## Benefits of the Modyo CLI

- **Local work**: Allows you to create widgets of any size or complexity from your local environment.
- **Local repository storage**: Facilitates widget management and collaboration with other developers through version control systems.
- **Widget reusability**: Allows you to create a widget once and reuse it across multiple sites and occasions.

## Installation

To use the Modyo Command Line, you must first install it globally on your local machine. This will enable the `modyo-cli` command, which allows you to initialize a project with predefined front-end architectural decisions using Modyo's base template or with an experience from the [Dynamic Framework](https://dynamicframework.dev) catalog.

You have two options to use the Modyo CLI:

- Global installation via NPM or Yarn
```bash
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

- Run it without installation using npx

```bash
$ npx @modyo/cli #via npx
$ npx @modyo/cli@latest #via npx - pointing to a particular version
```


To check the installation and confirm the CLI version, run this command:

```bash
$ modyo-cli version
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
In some cases, it's necessary to reload the terminal profile or start a new session for the `modyo-cli` command to be available.
:::

Modyo offers the ability to configure autocompletion for CLI commands. To get instructions on how to set it up, run one of the following commands:

```bash
$ modyo-cli autocomplete zsh
# or
$ modyo-cli autocomplete bash
```

## Environment Configuration

The next step is to configure your project to facilitate widget loading on the Modyo platform and their inclusion in pages. Although you can specify everything as parameters in the `push` call, it's recommended to define a set of environment variables in a `.env` file. This file will allow you to specify attributes such as the account URL, the site where it will be hosted, and the access token, among others.

### Previous actions

- **Get a Modyo access token**: To get the token, you need to have a user or [create one](/en/platform/core/roles.html#create-user) with at least the [role](/en/platform/core/roles.html#roles) of `site developer-cli` on the sites or stages where you'll deploy your widget. Once the user is created, you can [configure an access token](/en/platform/core/api.html#authentication) for them. This token will be used to configure and activate deployments on the platform.

- **Identify the application where you'll publish**:
To get your application's ID, go to your application summary. It's recommended to use this value whenever possible. If you need to use the site host, you'll find it in the general section of your application configuration.

### .env file configuration

After obtaining your application information and generating the required tokens, configure the `.env` file with the corresponding data.

You can use the example file `.env.example` included in the base template. This file contains the necessary predefined variables and a brief description of each one.


```bash
# Base URL of your Modyo organization
MODYO_ACCOUNT_URL=https://advocate.modyo.cloud/
# Either the host or the ID where you will deploy your micro frontend (not both)
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=77
# Token for authorizing the deployment, obtained from Modyo
MODYO_TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# Major version of the Modyo platform where the deployment will take place (8, 9 or 10)
MODYO_VERSION=10
# Directory containing the micro frontend bundle
MODYO_BUILD_DIRECTORY=build
# Name to identify your Micro Frontend in Modyo
MODYO_WIDGET_NAME=my-project
# Directive necessary for safely removing some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
# Enable ZIP deployment for code splitting (optional)
MODYO_ZIP=true
# Main JavaScript entry file for code splitting (optional, default: main.js)
MODYO_ZIP_ENTRY_JS=main.js
# Main CSS entry file for code splitting (optional, default: main.css)
MODYO_ZIP_ENTRY_CSS=main.css
```

### Description of variables in .env

- `MODYO_ACCOUNT_URL` URL of the domain where the deployment will be made in Modyo.
- `MODYO_SITE_HOST` Host of the site where you want to deploy the widget. Not necessary if you specify the site ID.
- `MODYO_SITE_ID` ID of the site where the deployment will be made.
- `MODYO_TOKEN` User access token for deployments.
- `MODYO_VERSION` Modyo platform version. For older versions it's 8 and the current one is 10.
- `MODYO_BUILD_DIRECTORY` Name of the folder containing the build result, such as "dist" or "build" depending on the framework used.
- `MODYO_WIDGET_NAME` Name the widget will have after being deployed to the platform.
- `MODYO_DISABLE_LIQUID_REGEX` Defines a regular expression to select files that need to disable Liquid usage, for example, template files where the definition or use of variables is likely to collide with Liquid usage.
- `MODYO_ZIP` Enables ZIP deployment mode for code splitting. Set to `true` for widgets with multiple files (default: `false`).
- `MODYO_ZIP_ENTRY_JS` Specifies the main JavaScript entry file when using ZIP deployment (default: `main.js`).
- `MODYO_ZIP_ENTRY_CSS` Specifies the main CSS entry file when using ZIP deployment (default: `main.css`).

## Initializing a New Project

The quickest and easiest way to create your first widget is by using our framework's React base template through the `get` command.

```bash
$ modyo-cli get dynamic-react-base-template my-project-name
```
This initializes a functional project to start new development.

Modyo also has a set of financial experience templates that further streamline the development of solutions in the digital banking and financial industry realm. You can find information about these experiences and how to obtain their templates in the [Experiences](https://dynamicframework.dev) section of the [Dynamic Framework](https://dynamicframework.dev) documentation.

:::tip Tip
All [Dynamic Framework](https://dynamicframework.dev) templates have a README file with information about their requirements and usage.
:::

An organization can also create its own templates to customize the initialization process. To obtain a custom template, use the `organization` option.

```bash
$ modyo-cli get --organization=myOrganization my-custom-template-repo my-project-name
```
From this point, you already have a functional project and can get its dependencies and run the integrated server.

```bash
$ cd my-project-name
$ npm install
$ npm run start
```
In a web browser, visit [`http://localhost:8081/`](http://localhost:8081/) to see the initialized project.


## CLI Commands
The available commands in the Modyo CLI and the description of each of their options are:

### `modyo-cli (-v|--version|version)`
Prints the version of `modyo-cli`.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

### `modyo-cli help`
Shows contextual help for the indicated command.

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  autocomplete Display autocomplete installation instructions
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

### `modyo-cli autocomplete`

Shows autocomplete instructions, if the option is configured.

```bash
USAGE
  $ modyo-cli autocomplete [SHELL]

ARGUMENTS
  SHELL       shell type

OPTIONS
  -r, --refresh-cache   Refresh cache (ignores displaying instructions)

EXAMPLE
  $ modyo-cli autocomplete
  $ modyo-cli autocomplete bash
  $ modyo-cli autocomplete zsh
  $ modyo-cli autocomplete --refresh-cache
```

### `modyo-cli get`

The `get` command is used to obtain a widget template from our [experience catalog](https://dynamicframework.dev) using a token provided by Modyo.

```bash
USAGE
  $ modyo-cli get NAME [DIRECTORY]

ARGUMENTS
  NAME       The name of the widget
  DIRECTORY  Name of directory to init

OPTIONS
  -f, --force        Override folder if exist
  -h, --help         Output usage information
  -o, --organization [default: modyo] Github organization
  -x, --no-install   Don't install packages

EXAMPLE
  $ modyo-cli get name [directory]
```

### `modyo-cli push`

Integrates a Vue-written widget to the selected Modyo Platform site.

```bash
USAGE
  $ modyo-cli push NAME

ARGUMENTS
  NAME  The name of the widget

OPTIONS
  -b, --build-command=build-command      [default: build] Build command in package.json
  -d, --build-directory=build-directory  [default: dist] Build directory path
  -h, --help                             Output usage information
  -i, --site-id=site-id                  Id of the site where the widget will be pushed
  -l, --disable-liquid                   Disable Liquid
  -n, --site-host=site-host              Host of the site where the widget will be pushed
  -p, --publish                          Force widget publication
  -t, --token=token                      (required) Modyo Api token
  -u, --account-url=account-url          (required) URL of your Modyo account ex("https://account.modyo.com")
  -v, --version=9|10                      [default: 10] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>

```

### `modyo-cli preview`

The `preview` command allows you to preview a widget locally to debug its code in a local environment before publishing it.

### Requirements

To use the `preview` command, make sure you meet the following requirements:

- A properly configured [.env](https://docs.modyo.com/en/platform/channels/cli.html#initial-configuration) file. The `MODYO_ACCOUNT_URL`, `MODYO_SITE_HOST` or `MODYO_SITE_ID` and `MODYO_TOKEN` fields are required.
- A local server running with the widget you want to preview.

### Steps to preview a widget

Once you have your `.env` file configured and your project running on the local server, follow these steps:

- Open a new terminal window.
- Run the `modyo-cli preview` command.

:::warning Important

To visualize a change, you must manually refresh your web app. Click **refresh** to load the changes.

:::

### Default variables
Modyo uses default variables for widget previewing, you can modify them as needed. The predefined variables are:

  - `MODYO_LOCAL_PORT`: Local server port (default: `8080`)
  - `MODYO_LOCAL_DOM_ID`: The ID of the widget container element (default: `widgetName`)
  - `MODYO_LOCAL_ENTRY_JS`: The main JavaScript file (default: `main.js`)


Additionally, you can select whether you want to preview your widget in the published version of your site or in the editable version. To do this, click the checkbox below **templates**. The text will change from **published** to **editable**.


These commands allow you to select the local entry points you want to use.


    OPTIONS

    -p, –port=<value> [default: 8080) Deploy port local widget running
    -s, –dom-id=<value> [default: widgetName] Container id of the widget
    -j, –entry-js=<value> [default: main.js] Entry JS file of the widget

    EXAMPLE

    MODYO_LOCAL_PORT=8080
    MODYO_LOCAL_DOM_ID=widgetName
    MODYO_LOCAL_ENTRY_JS=main.js



## Code Splitting

[Widgets](/en/platform/channels/widgets.html#widgets) allow you to develop complex functionalities in your Modyo web applications, thus increasing the functionality of your sites.

However, when including external libraries or increasing the complexity of a widget, you may face excessive loading times or exceed the size limits established for widgets in Modyo, which negatively affects both the development and user experience.

The _code splitting_ technique allows you to divide your widget code into components that load on demand or in parallel, solving these problems. The benefits of code splitting include:

- Significant reduction in initial load time (up to 99% smaller initial bundle).
- Faster Time to Interactive (TTI) and improved Core Web Vitals.
- Elimination of widget size restrictions.
- Better caching strategy for vendor and custom code.
- Improved overall performance and user experience.

### How code splitting works in Modyo

Code splitting divides your widget into multiple files:
- **Entry point** (`main.js`): A small file (typically 4-10 KB) that loads immediately.
- **Chunks**: Larger files containing the main application code, loaded asynchronously.
- **CSS files**: Separated into vendor and custom stylesheets for better caching.

The entry point configures the runtime environment and then dynamically imports the main application code, allowing the browser to start rendering faster while the rest of the application loads in the background.

### Requirements for code splitting

To implement code splitting in Modyo widgets, you need:

1. **Build tool support**: Webpack 5+ (Vite and other bundlers can also be configured).
2. **Multiple output files**: Your build must generate a main entry file and one or more chunks.
3. **Runtime public path configuration**: The widget must be able to resolve the correct CDN path for chunks at runtime.
4. **ZIP deployment**: All files must be packaged and deployed together using the `--zip` flag.

### Platform integration

Modyo provides runtime information about where widget assets are hosted through a global variable. This enables your widget to load chunks from the correct CDN location regardless of the environment (development, staging, production).

The platform injects the following variable before loading your widget:

```javascript
window['resourceBasePath-{​{widget.wid}}'] = "https://site.com/widget_manager/{​{widget.wid}}/{​{widget.version}}/";
```

Your widget's entry point must read this variable and configure the bundler's public path accordingly.

### Implementing code splitting with Webpack

For a Webpack-based widget, follow these steps:

#### 1. Create a public path configuration file

Create a `src/public-path.js` file (plain JavaScript, not TypeScript):

```javascript
// eslint-disable-next-line no-undef
__webpack_public_path__ = process.env.NODE_ENV === 'development'
  ? '/'
  : window['resourceBasePath-{​{widget.wid}}'];
```

This file must be imported **first** in your entry point, before any other imports.

#### 2. Update your entry point

Modify your `src/index.tsx` (or `index.js`) to lazy load the main application:

```typescript
// MUST BE FIRST IMPORT
import './public-path';

// Import CSS synchronously (ensures styles load immediately)
import './styles/base.scss';

// Lazy load the main application
import('./bootstrap')
  .then(() => console.log('App loaded successfully'))
  .catch((error) => console.error('Error loading app:', error));
```

#### 3. Create a bootstrap file

Create `src/bootstrap.tsx` with your main application initialization:

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initialize React
const root = ReactDOM.createRoot(
  document.getElementById('widgetName') as Element
);

root.render(<App />);
```

#### 4. Configure Webpack output

Ensure your Webpack configuration does **not** include a hardcoded `publicPath`:

```javascript
// .config/webpack.config.js
module.exports = {
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    // ⚠️ DO NOT set publicPath here
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'app-modules',
        },
      },
    },
  },
};
```

### CLI commands for code splitting

When deploying a widget with code splitting, you must use the `--zip` flag to package all files together:

```bash
# Basic deployment with ZIP
modyo-cli push --zip

# Specify custom entry points
modyo-cli push --zip --zip-entry-css=main.css --zip-entry-js=main.js

# Deploy and publish immediately
modyo-cli push --zip -p
```

#### Available options

- `--zip` or `-z`: Packages the widget bundle as a ZIP file (required for code splitting).
- `--zip-entry-css`: Specifies the main CSS file (default: `main.css`).
- `--zip-entry-js`: Specifies the main JavaScript file (default: `main.js`).

#### Using environment variables

Alternatively, you can configure these options in your `.env` file to avoid passing flags every time:

```bash
MODYO_ZIP=true
MODYO_ZIP_ENTRY_JS=main.js
MODYO_ZIP_ENTRY_CSS=main.css
```

With these environment variables set, you can simply run:

```bash
modyo-cli push
```

:::warning Important
The `--zip` flag (or `MODYO_ZIP=true` in `.env`) is **mandatory** for widgets with code splitting. Without it, only the main.js file will be uploaded, and chunks will fail to load in production.
:::

### Build output structure

After building a code-split widget, your build directory should look similar to this:

```
build/
├── main.js                        # 4-10 KB - Entry point
├── main.css                       # Small - Custom styles
├── app-modules.css                # Large - Vendor CSS
├── bootstrap.[hash].chunk.js      # Large - Main app code
├── [other-chunks].[hash].chunk.js # Additional chunks
└── asset-manifest.json            # Asset manifest
```

### Verifying code splitting works

After deploying your widget, verify it works correctly:

1. **Open browser DevTools** and go to the Network tab.
2. **Reload the page** containing your widget.
3. **Check the waterfall**:
   - `main.js` should load first (small file, 4-10 KB).
   - CSS files should load immediately after.
   - Chunks (e.g., `bootstrap.[hash].chunk.js`) should load shortly after.
4. **Check the Console** for any error messages related to chunk loading.

### Common issues and solutions

#### Chunks return 404 errors

**Cause**: The runtime public path is not configured correctly.

**Solution**:
- Verify that `public-path.js` is imported **first** in your entry point.
- Check that `window['resourceBasePath-{​{widget.wid}}']` is defined (inspect HTML source).
- Ensure you deployed with the `--zip` flag.

#### Styles load late (FOUC - Flash of Unstyled Content)

**Cause**: CSS is imported in the lazy-loaded bootstrap file instead of the entry point.

**Solution**: Move all CSS imports to `index.tsx` (entry point), not `bootstrap.tsx`.

#### Widget fails silently after deployment

**Cause**: Missing `--zip` flag during deployment.

**Solution**: Redeploy using `modyo-cli push --zip`.

### Performance recommendations

- **Analyze bundle composition**: Use webpack-bundle-analyzer to identify large dependencies.
- **Split by routes**: For multi-page widgets, lazy load route components.
- **Monitor metrics**: Track First Contentful Paint (FCP) and Time to Interactive (TTI).
- **Target bundle sizes**:
  - Entry point: < 10 KB
  - Total CSS: < 100 KB (gzipped)
  - Main chunk: < 500 KB (gzipped)

### Reference implementation

Modyo provides a reference template with code splitting already configured:

```bash
modyo-cli get dynamic-react-base-template-codesplit@main my-widget
```

This template includes:
- Pre-configured Webpack setup
- Runtime public path configuration
- Lazy loading pattern
- Optimized CSS splitting
- Ready for production deployment

**GitHub Repository**: [dynamic-react-base-template-codesplit](https://github.com/modyo-community/dynamic-react-base-template-codesplit)

The repository includes complete documentation on:
- Architecture decisions and technical context
- Step-by-step implementation guide
- Troubleshooting common issues
- Performance optimization recommendations
- Example configurations for different scenarios

For more details on implementing code splitting, including architecture decisions and advanced configurations, refer to the template's documentation.


## Deployment
Once your widget is finished, you can prepare it for publication with the `build` command.

This command will perform the necessary actions to prepare your widget for production, including cleaning and minification of the final files:

```bash
$ npm run build
```

To send it to Modyo, use the `push` command. This command uses your configurations to select a target site or stage and check if the widget already exists in Modyo. Depending on the case, it will create or update it on the platform.

```bash
$ modyo-cli push
```

You can immediately publish the micro-frontend on the platform using the `-p` parameter.

```bash
$ modyo-cli push -p
```

:::warning Attention
The token owner user must have a role of [site reviewer or admin](/en/platform/core/roles.html#roles) on the site where you are deploying the widget for publication to be carried out correctly.
:::

Once a widget is deployed and published in Modyo, it's available to be used on the pages of the site it belongs to.

If you have defined [variables](/en/platform/core/key-concepts.html#global-variables), their values can be specified at a global level or particular to each widget instance.