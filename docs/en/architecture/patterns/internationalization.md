---
search: true
---

# Internationalization

Internationalization (i18n) in web applications is the process of designing and developing software to adapt and function correctly in different languages, cultures, and regions. Its main objective is to facilitate localization, allowing the application to adjust to the linguistic and cultural requirements of users.

To achieve this, aspects such as the following must be considered:

- **Text localization**: Separate the textual content from the code to facilitate its translation and adaptation to different languages, using resource files or databases.
- **Date and time format**: Present dates and times in formats that are understandable and acceptable for various regions, including different formats, timestamps, and time zones.
- **Numeric and monetary format**: Adapt the display of numbers and monetary values according to the cultural preferences of users.
- **Character and encoding support**: Correctly handle and display special characters and accented letters from different languages.
- **Interface design**: Design flexible interfaces that adapt to different text lengths and grammatical structures (e.g., right-to-left languages).

The implementation of internationalization practices facilitates the translation, localization, and adaptation of the application to different languages and cultures, expanding its reach and improving the user experience by offering relevant content adapted to their local context.

### Implementation of internationalization with Modyo

In Modyo, internationalization can be implemented in two ways. The first, and simplest, uses the language tools integrated into the platform, which allow the publication and management of content in various languages within the same space.

For websites and applications, the language is defined by channel, which allows content and variables to be obtained from the selected language for end users. Each site includes a Liquid context variable that identifies the language, facilitating the creation of custom logic or the delivery of its value to third parties (e.g., micro frontends or external libraries such as chatbot systems).

A second way to implement internationalization in Modyo is through micro frontends. These components, developed externally, must be designed to be incorporated into websites or applications with various language configurations.

In this case, it is recommended to develop the micro frontends including an i18n library that allows changing the language and location through a variable injected dynamically when loading the component. In this way, the same micro frontend can be reused on different sites or web applications, adapting to the language configured in each one.


:::tip Maintaining language files
In complex projects with multiple microservices and several languages, managing language keys in different repositories can be a challenge. To simplify this process, Modyo recommends incorporating a language automation system. These systems control the files in each repository and provide a management interface for their updating.

Examples of language automation systems that integrate directly with repositories include Transifex, Lokalise, Crowdin, and WebTranslate.
:::