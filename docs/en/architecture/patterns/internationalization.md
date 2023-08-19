---
search: true
---

# Internationalization

Internationalization in web applications is the process of designing and developing applications that can adapt and function correctly in different languages, cultures and regions around the world. The main objective of internationalization is to make a web application easily localizable, that is, capable of adapting to the linguistic and cultural requirements of different users.

Internationalization involves considering aspects such as:

- **Text Localization:** This involves separating the textual content of the application from its underlying code, so that it can be translated and adapted to different languages. Mechanisms such as resource files or databases are used to store findable content.
- **Date and time format:** Applications must be able to present dates and times in formats that are understandable and acceptable in different regions. This includes using different date formats, timestamps, and time zone options.
- **Numerical and monetary format:** Numbering systems and currency symbols vary from country to country. Web applications must be able to adapt the way numbers and monetary values are displayed according to the cultural preferences of users.
- **Character and encoding support:** Different languages use different character sets and encodings. Web applications must be able to correctly handle and display special characters and accented letters corresponding to different languages.
- **Interface Design:** The interface design must be flexible to adapt to different text lengths and grammatical structures. For example, languages written from right to left require a reverse interface design compared to languages written from left to right.

By applying internationalization practices in the development of web applications, the translation, localization and adaptation of the application to different languages and cultures is facilitated. This expands the reach of the application, allows it to reach wider audiences and improves the user experience by offering relevant content adapted to their local context.

### How is internationalization implemented with Modyo?

Within Modyo, internationalization can be implemented in different ways. The first of these, and the simplest, is using the language tools available within the same platform, which consist of configurations that will allow you to publish and maintain content in different languages within the same space. In the case of Web sites and applications, the language is defined within each channel, thus allowing content and variables to be taken from the selected language for deployment to end users. Within each site, there will be a Liquid context variable that will identify the language, allowing you to create customized logic according to the language or to deliver its value to a third party, such as a [micro frontend] (/es/architecture/patterns/micro-frontend) deployed on Modyo or a third-party library, such as a Chat Bot system.

From the latter, a second way of implementing internationalization within Modyo emerges, through micro frontends. Microfrontends, when developed externally, must be prepared to be injected into Web sites or applications that may have different languages configured. That is why in this case it is recommended to develop micro frontends considering the inclusion of an i18n library that allows modifying the language and the location using a variable that is dynamically injected when loading the component. In this way, the same micro frontend can be reused in different sites or Web applications, changing its language according to the configuration of the site.

:: :tip Maintaining language files
In complex initiatives, with the presence of multiple microservices in several languages, managing language keys within different repositories can be complex. To solve this problem, Modyo recommends the inclusion in projects of a language automation system, which takes control of the files in each repository and presents them in a management interface to the people who will be in charge of keeping them up to date. Within these types of systems, we can mention Transifex, Lokalise, Crowdin, WebTranslate, among others. All of them have direct integration capabilities to repositories.
:::
