---
search: true
---

# Introduction

Welcome to the **Modyo Financial Widget Catalog**. Here you will find a complete reference of all the financial experiences Modyo delivers as part of this product, from installation and development in your local environment, to the description of interfaces, available parameters and reference of the main features of each Widget.


### What is a Widget?

A **Widget** is an isolated component that packages its own markup (`html`), style (`css`) and javascript so that it can be deployed as part of any web page without having runtime errors or conflicts with the styles or javascript of the page hosting it.

In other words, a **Widget** is a [micro frontend](https://martinfowler.com/articles/micro-frontends.html): an architectural style that allows you to compose and deploy multiple javascript applications on a page.

Modyo provides the ideal platform to deploy these types of applications and create your Widget gallery through the [Widget builder](https://develop.docs.modyo.com/platform/channels/Widgets.html) and the tools needed to be able to develop them using the [modyo-cli](https://www.npmjs.com/package/@modyo/cli) or the [javascript SDK](https://www.npmjs.com/package/@modyo/sdk).

Modyo is an agnostic platform in terms of the use of javascript frameworks, you can deploy applications made in **Vue**, **Angular** or **React**. For the**Financial Widgets**, we decided to use **Vue** (because we think the learning curve is small, it has a vibrant ecosystem that gains traction, among other things), but you and your team can occupy Angular or React.

### Why use a Widget from this catalog?

The Financial Widgets catalog is designed to accelerate the development of your digital experiences by offering interactive components for you to customize and assemble them into flows that fit your business.

Financial Widgets deliver from the box:

- **UX** designed to facilitate user interaction
- **Basic accessibility** (such as contrasting suitable colors, use of legible typographical sizes, semantic structure, etc)
- **Internationalization and localization of texts and currencies**. By default each Widget comes in English and Spanish, but it has all the necessary infrastructure to customize the languages it brings or add more languages to suit your business needs. If deployed in Modyo, Widgets detect the language configured for the site
- **Validations for forms, dates**
- **Flat styles for easy customization** with our downloadable PDF design system [from here](/assets/pdf/Widget_Modyo.pdf) using **Sass** and popular libraries like [Bootstrap](https://getbootstrap.com/) and [Font Awesome](https://github.com/FortAwesome/vue-fontawesome#using-brand-icons)


