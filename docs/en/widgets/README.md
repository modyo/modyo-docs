---
search: true
title: Widgets
meta:
  - name: description
    content: Welcome to the Modyo Financial Widget Catalog. Here you will find a complete reference to all the financial experiences that Modyo provides as part of this product, from the installation and development in your local environment, to the description of the interfaces, available parameters, and reference of the main features of each Widget.
version: 9.2
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

### What is a Widget?

A **Widget** is an isolated component that packages its own markup (`html`), style (`css`), and javascript so that it can be displayed as part of any web page without runtime errors or conflicts with the styles or javascript of the hosting page.

In other words, a **Widget** is a [micro frontend](https://martinfowler.com/articles/micro-frontends.html): an architectural style that allows you to compose and deploy multiple javascript applications on a page.

Modyo provides the ideal platform for deploying such applications and creating your Widgets gallery through the [Widget builder](https://docs.modyo.com/en/platform/channels/Widgets.html) and the tools needed to develop them using [modyo-cli](https://www.npmjs.com/package/@modyo/cli) or [javascript SDK](https://www.npmjs.com/package/@modyo/sdk).

Modyo is platform agnostic within javascript frameworks, you can deploy applications made in **Vue**, **Angular**, **React**, etc. In the case of the **financial widgets**, we mainly use **Vue** (because we think the learning curve is small, it has a flourishing ecosystem that is gaining traction, among others things), but you're free to choose another option.


### Why use a Widget from this catalog?

The Financial Widgets catalog is designed to accelerate your digital experiences' development by offering interactive components for you to customize and assemble into flows that fit your business.

Financial Widgets deliver out of the box:

- **UX** designed to facilitate user interaction
- **Basic accessibility** (such as contrasting suitable colors, use of legible typographical sizes, semantic structure, etc)
- **Internationalization and localization of texts and currencies**. By default each Widget comes in English and Spanish, but it has all the necessary infrastructure to customize the your language or add more languages to suit your business needs. If deployed in Modyo, Widgets detect the language configured for the site
- **Validations for forms, dates**
- **Flat styles for easy customization** with our downloadable PDF design system [from here](/assets/pdf/Widget_Modyo.pdf) using **Sass** and popular libraries like [Bootstrap](https://getbootstrap.com/) and [Font Awesome](https://github.com/FortAwesome/vue-fontawesome#using-brand-icons)