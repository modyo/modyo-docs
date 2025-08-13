---
search: true
---

# Internationalization

Internationalization (i18n) in web applications is the process of designing and developing software to adapt and function correctly across different languages, cultures, and regions. Its primary objective is to facilitate localization, enabling the application to adjust to the linguistic and cultural requirements of users.

To achieve this, the following aspects must be considered:

- **Text localization**: Separating textual content from the code to facilitate its translation and adaptation to different languages, typically using resource files or databases.
- **Date and time format**: Presenting dates and times in formats that are understandable and acceptable for various regions, including different formats, timestamps, and time zones.
- **Numeric and monetary format**: Adapting the display of numbers and monetary values according to the cultural preferences of users.
- **Character and encoding support**: Correctly handling and displaying special characters and accented letters from different languages.
- **Interface design**: Designing flexible interfaces that adapt to varying text lengths and grammatical structures (e.g., right-to-left languages).

Implementing internationalization practices facilitates the translation, localization, and adaptation of the application to different languages and cultures, expanding its reach and improving the user experience by offering relevant content tailored to their local context.

### Implementation of internationalization with Modyo

In Modyo, internationalization can be implemented in two ways. The first, and simplest, utilizes the language tools integrated into the platform, which allow for the publication and management of content in various languages within the same space.

For websites and applications, the language is defined by channel, enabling content and variables to be obtained from the selected language for end users. Each site includes a Liquid context variable that identifies the language, facilitating the creation of custom logic or the delivery of its value to third parties (e.g., micro frontends or external libraries such as chatbot systems).

A second approach to implementing internationalization in Modyo is through micro frontends. These externally developed components must be designed to be incorporated into websites or applications with various language configurations.

In this case, it is recommended to develop micro frontends that include an i18n library, allowing for language and location changes through a dynamically injected variable when the component loads. This approach enables the same micro frontend to be reused across different sites or web applications, adapting to the language configured in each.


:::tip Maintaining language files
In complex projects with multiple microservices and several languages, managing language keys across different repositories can be challenging. To simplify this process, Modyo recommends incorporating a language automation system. These systems control the files in each repository and provide a management interface for their updating.

Examples of language automation systems that integrate directly with repositories include Transifex, Lokalise, Crowdin, and WebTranslate.
:::
