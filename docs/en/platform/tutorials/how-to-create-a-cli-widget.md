---
search: true
---

# Create a Widget using the Modyo CLI

## Introduction

Welcome to a new tutorial of the Modyo training series. This tutorial focuses on creating a [Widget](/en/platform/channels/widgets.html) from the [Modyo Financial Widget Catalog](/en/widgets/) using the [Modyo CLI](/en/platform/channels/widgets.html#modyo-cli).

As in the other tutorials, we will use the fictional brand “Dynamic Bank”, which we will introduce below.

### Dynamic Bank

Dynamic Bank is the name we use at Modyo for our demos and examples of the platform. We created it so users of the Dynamic demos can get a sense of what it's like to work with the Modyo platform. Once you have completed this tutorial, your site should look like this:

<img src="/assets/img/tutorials/how-to-create-private-site/summary.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>


## Prerequisites

Be familiar with:

- HTML
- CSS
- JS
- Modyo's platform

## Step 1: Install Modyo CLI

Now that we have the base to add the Widget ready, you need to install [Modyo CLI](/en/platform/channels/widgets.html#modyo-cli).

[Modyo CLI](/en/platform/channels/widgets.html#modyo-cli) is a command-line tool based on the principles of acceleration and integration with GET and PUSH commands respectively.

To install Modyo CLI we need some dependencies, which must be installed globally.

They are:

* Git distributed version control system (v 1.7+)
* Node (v 14+)
* Un editor de código como por ejemplo Visual Studio Code
* Npm (v 6.14+)
* Yarn (v 1.22+)

You can use one of the following options in the terminal to perform the installation:

<code>Via yarn</code>

```sh
$ yarn global add @modyo/cli
```

<code>Via npm</code>

```sh
$ npm i -g @modyo/cli
```

Once installed, verify that everything is OK by running the command <code>modyo-cli help</code>.

## Step 2: Initialize a Catalog Widget

After completing the installation process, let's get the [Account Summary](/en/widgets/retail/summary.html) Widget from the [Modyo Financial Widget Catalog](/en/widgets/).

To download the Widget to your local environment we do it with the following command:

```sh
modyo-cli get modyo-widgets-retail-summary
```

At the end of the process, a view appears like this:

<img src="/assets/img/tutorials/how-to-create-private-site/terminal.png" style="max-width: 400px;margin: auto 0;"/>


To edit it you need to go to the <code>modyo-widgets-retail-summary</code> folder inside the terminal. 

:::tip Tip
When you build a widget for the first time, make sure to install all dependencies before by running the command <code>npm install</code>. This process could take a while depending on your local internet connection.
:::

To build it locally, use <code>yarn serve</code> or <code>npm serve</code> in your browser.

<img src="/assets/img/tutorials/how-to-create-private-site/widget.png" style="max-width: 600px;margin: auto 0;"/>

## Step 3: Style Changes in the Widget

Catalog Widgets are designed in Modyo with a simple style. To make changes you need to open the widget folder <code>modyo-widgets-retail-summary</code> in your editor, which in our case is Visual Studio Code.

<img src="/assets/img/tutorials/how-to-create-private-site/vscode.png" style="max-width: 600px;margin: auto 0;"/>

To change the colors of variables to Dynamic Bank, follow these steps:

1. Navigate to the <code>src</code> folder.
1. Inside the css folder, open the `_variables.css` file.
1. Modify the code with the following:

```css
$primary-10: #EEF0F5;
$primary-20: #E8EAF1;
$primary-40: #D2D6E5;
$primary-60: #A5AECC;
$primary-80: #7985B2;
$primary-100: #384470;
$primary-dark: #2e4553;
$secondary-10: #eff0f1;
$secondary-20: #e0e2e3;
$secondary-40: #c1c5c7;
$secondary-60: #a1a8aa;
$secondary-80: #828b8e;
$secondary-100: #636e72;
$secondary-dark: #515a5e;
$tertiary-10: #f7f8f9;
$tertiary-20: #f0f2f3;
$tertiary-40: #e0e5e7;
$tertiary-60: #d1d8db;
$tertiary-80: #c1cbcf;
$tertiary-100: #b2bec3;
$tertiary-dark: #a3afb4;
$red: #D7426E;
$yellow: #F2C10D;
$green: #70D960;
$primary: $primary-100;
$secondary: $secondary-100;
$light: $secondary-10;
$dark: $secondary-dark;
```

4. Open the `_theme.css` file.
5. Modify line 8, leaving the _body_ with a `background: white`;
6. In the directory <code>src/components/summaryaccount.vue</code>, modify the card header, modifying the background to `$primary-40`, specifically line 169 to look like this:

```css
.card-header.product-summary__header:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: $primary-40;
}
```

7. In line 8 we add class h6 to h2 like this:

```html
<h2 class="h6 mb-0 text-capitalize">
  {{ account.accountType }}
  <span class="d-block mt-1">{{ $tc('commons.number', account.accountNumber) }}</span>
</h2>
```

8. Add styles to make the amount bar look green:

```css
.m-progress-bar .progress-bar {
  background: $green !important;
}
```

9. Open the file <code>App.vue</code>.
10. To add the title, copy the following code:

```html
<template>
  <article
    id="summary-app"
    class="py-4 py-sm-5">
    <div class="container-fluid px-0">
      <div
        v-if="isLoading"
        class="loading text-center pt-5">
        <font-awesome-icon
          icon="circle-notch"
          size="5x"
          spin />
      </div>
      <div
        v-else
        ref="viewport"
        class="products-viewport">
        <div class="header-summary mb-3">
          <h3 class="h4 text-primary font-weight-bold">Hola</h3>
          <h3 class="h4 text-primary">Bienvenido a Dynamic</h3>
        </div>
        <div
          ref="content"
          class="products-summary d-flex align-items-stretch">
          <summary-account
            v-for="account in accounts"
            :key="`account-${account.id}`"
            :account="account"
            :client-id="clientId" />

          <summary-card
            v-for="card in cards"
            :key="`card-${card.id}`"
            :card="card"
            :client-id="clientId" />

          <summary-add key="add" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ScrollBooster from 'scrollbooster';
import { getURLParams } from '@modyo/financial-commons';
import SummaryAccount from './components/SummaryAccount.vue';
import SummaryCard from './components/SummaryCard.vue';
import SummaryAdd from './components/SummaryAdd.vue';

export default {
  name: 'App',
  components: {
    SummaryAccount,
    SummaryCard,
    SummaryAdd,
  },
  data() {
    return {
      carousel: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    accounts() {
      return this.$store.state.accounts;
    },
    cards() {
      return this.$store.state.cards;
    },
    clientId() {
      return this.$store.state.clientId;
    },
  },
  created() {
    const client = parseInt(getURLParams('client'), 10) || 1;
    this.$store.commit('SET_CLIENT_ID', client);
    this.$store.dispatch('DO_DATA_INITIALIZATION').then(() => {
      this.initProductsCarousel();
    });
  },
  methods: {
    initProductsCarousel() {
      const { viewport } = this.$refs;
      const { content } = this.$refs;

      // eslint-disable-next-line no-unused-vars
      const sb = new ScrollBooster({
        viewport,
        content,
        direction: 'horizontal',
        emulateScroll: false,
        onUpdate: (state) => {
          if (state.borderCollision.right) {
            content.style.transform = `translateX(${-state.position.x - 20}px)`;
          } else {
            content.style.transform = `translateX(${-state.position.x}px)`;
          }

          if (state.isMoving) {
            viewport.style.cursor = 'grabbing';
          } else {
            viewport.style.cursor = 'grab';
          }
        },
        shouldScroll: (state, event) => {
          // disable scroll if clicked on button
          const isLink = event.target.nodeName.toLowerCase() === 'a';
          return !isLink;
        },
      });

      sb.updateMetrics();
    },
  },
};
</script>

<style lang="scss" scoped>
.products-viewport {
  overflow: hidden;

  cursor: grab;
}

@media (max-width: 575.98px) {
  .header-summary h2 {
    font-size: 24px;
  }
}
.header-summary {
  margin-left: 30px;
}
@media (min-width: 1200px) {
  .header-summary {
    margin-left: 140px;
  }
}
</style>
```

> Once you finish giving the widget the look and feel, you're ready to push to Modyo.

## Step 4: Send Widget to Site

To push the Widget to the site in Modyo, you need to generate the configuration in the Modyo CLI so that it knows where the push is going.

Follow these steps to create the configuration file:

1. In the root folder of the widget, create a file <code>.env</code>.
2. Add the following code and replace **[Account url]** and **[Modyo API Token]** according to your context:

```
MODYO_ACCOUNT_URL= [Account url]
MODYO_SITE_HOST=private-site
MODYO_VERSION=9
MODYO_TOKEN= [Modyo API Token]
MODYO_BUILD_DIRECTORY=dist
MODYO_WIDGET_NAME=Summary

```

To get an API token, follow these steps:

1. In the Platform main menu, select **Settings** and click on **API Access**
1. Click <b>+ New API Access</b>.
1. In the modal complete the following data:

<table>
 <tr>
  <td>
   Name
  </td>
  <td>
   modyo-cli
  </td>
 </tr>
<tr>
  <td>
   Description
  </td>
  <td>
   Token used to push from modyo-cli
  </td>
 </tr>
 <tr>
  <td>
   Redirect URI
  </td>
  <td>
   urn:ietf:wg:oauth:2.0:oob
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/how-to-create-private-site/token.png" style="max-width: 400px;margin: auto 0;"/>

4. Once the API access is created, click **Team**.
5. Search and select your user.
6. Click on the **API Access** section and click on **+ New Access Token**.
7. Select **modyo-cli** and click **Create Token**.

<img src="/assets/img/tutorials/how-to-create-private-site/access_token.png" style="max-width: 400px;margin: auto 0;"/>

Now that you have a token, you can add it to the configuration file <b>.env</b>.

<img src="/assets/img/tutorials/how-to-create-private-site/token_gnerated.png" style="max-width: 400px;margin: auto 0;"/>

Ejecutar <code>npm run build</code>

8. In the terminal, use the command <code>modyo-cli push Summary</code>, this command pushes the widget to your site. You can find it in the Custom Widgets section.

<img src="/assets/img/tutorials/how-to-create-private-site/wb.png" style="max-width: 400px;margin: auto 0;"/>

:::tip Tip
If you find problems to run the build command, try installing a previous version of postCSS using this line

<code>npm i -D @fullhuman/postcss-purgecss@3.0.0 postcss@7.0.35</code>
:::

9. To make it available in the widget library, on the platform, under Channels -> Sites, and go to your site.
10. Click **Widgets**, your widget will be listed as a Widget ready to be published. Go to your widget and click **Publish**.
11. In the Review and Publish window, select your widget and click **Publish**. Select the **Publish Now** option.

<img src="/assets/img/tutorials/how-to-create-private-site/widget_custom.png" style="max-width: 400px;margin: auto 0;"/>

12. Select **Pages** and click Home.
13. Delete the existing HTML Widget and add your Custom Widget.

<img src="/assets/img/tutorials/how-to-create-private-site/home.png" style="max-width: 600px;margin: auto 0;"/>

## Step 5: Review and Publish Home, Navigation, and Template

After completing the above steps, review the entire site in preview mode. When you are satisfied with the result, you must publish your changes to make all changes available to your end users.

To make a post, from the **Summary** section, click the button <b>Publish</b> where a panel will open with your changes.

<img src="/assets/img/tutorials/how-to-create-private-site/publish.png" style="max-width: 700px;margin: auto 0;"/>

Select all pending changes, and click **Publish**. Select **Publish Now**.

## Conclusion

Congratulations! You have completed the Private Site course with Modyo CLI Widgets.

Find more information about Modyo:
- [Modyo Channels](/en/platform/channels) with all its modules:
- [Pages](/en/platform/channels/pages)
- [Navigation](/en/platform/channels/navigation)
- [Widgets](/en/platform/channels/widgets)
- [Templates](/en/platform/channels/templates)
- [Site settings](/en/platform/channels/sites.html#site-settings)
- [Modyo CLI](/en/platform/channels/widgets.html#modyo-cli)
- [Modyo Catalog](/en/widgets/)
