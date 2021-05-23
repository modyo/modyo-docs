---
search: true
translated: true
---

# Widget Catalog

​
Welcome to **Modyo's Catalog of Financial Widgets**. Here you can find a full description of all the financial experiences provided by the catalog, with information ranging from installation and development in your local environment to the description of interfaces, available parameters and references to the primary functionalities of each widget.

<img src="/assets/img/widgets/widgets.png" style="margin-top: 40px;" />

### What is a widget?

A **widget** is a self-contained component that packages its own markup (`HTML`), style (`CSS`) and Javascript so that it can be displayed as a part or section of any web page without having runtime errors or conflicts with the existing styles or Javascript of the hosting page.
​
In other words, using **widgets** as independent pieces to build pages that appear as single, cohesive products is a technique called [micro frontends](https://martinfowler.com/articles/micro-frontends.html): an architectural style where independently deliverable frontend applications are composed into a greater whole.
​
Modyo provides the ideal platform to deploy these types of applications and create your widget gallery through the [Widget Builder](https://develop.docs.modyo.com/platform/channels/widgets.html) and the necessary tools to develop them using the [modyo-cli](https://www.npmjs.com/package/@modyo/cli) or the Modyo [Javascript SDK](https://www.npmjs.com/package/@modyo/sdk).
​
Modyo is an agnostic platform in which, through the use of Javascript frameworks, you can deploy applications made in **Vue**, **Angular**, or **React**. In the case of the pre-built **financial widgets**, Modyo uses **Vue** (because we think the learning curve is low, it has a vibrant ecosystem that is gaining momentum and much more), but you and your team can just as well use Angular or React.
​

### Why use a widget from this catalog?

​
The financial widget catalog is designed to accelerate the development of your digital experiences by providing interactive components for you to customize and assemble into flows that suit your business.
​
Financial widgets out of the box deliver:
​

- **UX** designed to facilitate user interaction.
- **Basic Accessibility** (such as appropriate color contrast, use of legible font sizes, semantic structure, etc.)
- **Internationalization and localization of texts and currencies**. By default, each widget comes in English and Spanish, but they each have all the necessary infrastructure to adapt to any language or add more languages to suit your business needs. If deployed in Modyo, the widgets automatically detect the language configured within a site or application.
- **Validations for forms and dates**.
- **Easily customizable, flat styles** with a downloadable design system [here in PDF](/assets/pdf/Widget_Modyo.pdf) that uses **Sass** and popular libraries such as [Bootstrap](https://getbootstrap.com/) and Font Awesome.
  ​

## Getting Started

​
In order to start using the widgets in this catalog, the first thing you need is to install and access the Modyo `CLI` (Command-Line Interface):
​

```
# if you use `npm`
$ npm i -g @modyo/cli
# if you use `yarn`
$ yarn global add @modyo/cli #via yarn
```

​
This should install the latest stable version of the tool globally on your local machine. You can check your installed version of the `CLI` with this command:
​

```
$ modyo-cli --version
```

​
With the `modyo-cli` installed you can now create widgets and deploy them on a Modyo site.

However, in order to use the widgets in this catalog, you and your organization need to complete an extra step. You need to obtain a token that will allow you to have access to all the widgets.
​
:::tip Access to Templates
To access the Financial Widget templates, you must have valid access to the repository which is delivered as part of the license agreement.
:::
​
Now we can download a widget from the catalog using the Modyo `CLI`:
​

```
# - The first argument (the widget name) is required
# - The second argument,
# 	which allows you to download the widget to a separate folder,
# 	is optional
$ modyo-cli get <widget-name-in-the-catalog> <folder-name>
```

​
For your convenience, the documentation of each widget includes the command needed to install it.

Each widget comes with several useful `scripts` you can access during development:
​

- `(yarn|npm) serve`: builds the widget in your local environment using `vue-cli-service`.
- `(yarn|npm) build`: compiles and transpiles the widget, applying a series of optimizations to be deployed in production. _Must always be executed **before**_ sending the widget to a Modyo site or application.
- `(yarn|npm) lint`: runs a linter to detect Javascript errors.
- `(yarn|npm) test:unit`: runs the unit tests of the widget.
- `(yarn|npm) i18n:report`: generates a report with all the keys not yet translated.
- `(yarn|npm) lint:style`: runs a style linter to detect errors.
- `(yarn|npm) modyo-push`: sends a compiled widget to a pre-configured Modyo site or application.
- `(yarn|npm) modyo-serve`: builds the widget in your local environment, but adds the styles and Javascript libraries that the widget will require when deployed on a site or application.
  ​
