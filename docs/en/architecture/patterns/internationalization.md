---
search: true
---

# Internationalization

Internationalization in web applications is the process of designing and developing applications that adapt and function correctly in different languages, cultures and regions around the world. The main objective is to make a web application easily localizable, that is, capable of adjusting to the linguistic and cultural requirements of users.

To achieve this, these aspects must be taken into consideration:

- **Text Localization:** Involves separating the textual content of the application from its underlying code, allowing it to be translated and adapted to different languages. This is achieved through the use of resource files or databases.
- **Date and time format:** Applications must present dates and times in formats that are understandable and acceptable in various regions, including different date formats, timestamps, and time zone options.
- **Numerical and monetary format:** Numbering systems and currency symbols vary by country. Web applications must be able to adapt the way they display numbers and monetary values according to the cultural preferences of users.
- **Character and encoding support:** Different languages use different character sets and encodings. Web applications must correctly handle and display special characters and accented letters corresponding to different languages.
- **Interface design: ** The interface must be flexible to adapt to different text lengths and grammatical structures. For example, languages written from right to left require a reverse interface design compared to languages written from left to right.

The implementation of internationalization practices makes it easier to translate, localize and adapt the application to different languages and cultures. This broadens their reach, reaches wider audiences and improves the user experience by offering content that is relevant and adapted to their local context.

### Implementing internationalization with Modyo

At Modyo, internationalization can be carried out in two ways. The first and easiest involves using the language tools integrated into the platform. These settings allow the publication and management of content in several languages in the same space.

For websites and applications, the language is defined on each channel, allowing content and variables to be taken from the selected language to be deployed to end users. Each site includes a Liquid context variable that identifies the language, allowing you to create custom logic according to the language or to deliver its value to a third party, such as a micro frontend deployed on Modyo or a third-party library, such as a chatbot system.

This gives rise to a second way of implementing internationalization within Modyo, using micro frontends. These components, developed externally, must be designed to be incorporated into websites or applications that may have different language settings.

In this case, it is recommended to develop micro frontends taking into account the inclusion of an i18n library that allows changing the language and location using a dynamically injected variable when loading the component. In this way, the same microfrontend can be reused on different sites or web applications, adapting to the language configured on each site


:: :tip Maintaining language files
In complex projects, with multiple microservices in several languages, managing language keys in different repositories can be a challenge. To simplify this process, Modyo recommends incorporating a language automation system. These systems are responsible for controlling the files in each repository and provide a management interface for the people responsible for keeping them up to date.

Some language automation systems include Transifex, Lokalise, Crowdin and WebTranslate. All of these have the ability to integrate directly with repositories.
:::
