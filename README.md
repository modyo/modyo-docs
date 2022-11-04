# Modyo Docs

## Usage

- Clone this repo
- `cd modyo-docs` and install dependencies (`yarn install`)
- Start the development server (`yarn docs:dev`)
- Load the site at `http://localhost:8080`

For node 17+ and MacOS: 
export NODE_OPTIONS=--openssl-legacy-provider

## Structure

All the site it's inside the `/docs` folder, and the main configuration it's in `/docs/.vuepress`, including the public folder (`/docs/.vuepress/public`)

The default language is english:

```
- docs/
 - .vuepress/
 - platform/ # All docs in spanish
 - README.md # It's like an index. In this case is the home page
```

Any new language should imitate the same structure. Here we add the spanish version of the site:

```
- docs/
 - .vuepress/
 - platform/
 - README.md # It's like an index. In this case is the home page
 - es/
  - platform/ # all docs in spanish
  - README.md # The home page in spanish
```

The main navigation and the sidebar are controlled by the configuration (`/docs/.vuepress/config.js`)

## Routes

Any file (markdown files) follow the same structure of the file system plus the language. For example:

```
- platform/
 - foo/
  - README.md
```

The route should be `/guides/foo/`. If we add the same folder `foo` to the english language, should be `/guides/foo/`.

The main navigation and the sidebar are controlled by the configuration file (`/docs/.vuepress/config.js`)
