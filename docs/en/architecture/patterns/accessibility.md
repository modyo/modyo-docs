---
search: true
---

# Accessibility

Web accessibility is the practice of designing and developing sites and applications so that they can be used by all people, regardless of their abilities. The goal is to eliminate barriers that prevent people with disabilities from accessing, interacting with, and benefiting from online resources and services.

Web accessibility is based on the principle of universal design, which seeks to create products and environments that are usable by as many people as possible, regardless of their skills or abilities. This includes considering people with visual, auditory, motor, or cognitive disabilities.

Key aspects of web accessibility:

- **Compatibility with assistive technologies**: Ensure that assistive technologies, such as screen readers or special keyboards, can effectively navigate and access content.
- **Semantic HTML**: Correctly use HTML tags to structure and describe content clearly, allowing people with visual or cognitive disabilities to understand the information presented.
- **Contrast and readability**: Ensure adequate contrast between text and background to facilitate reading for people with visual disabilities or perception difficulties.
- **Keyboard navigation**: Design intuitive and easy-to-navigate interfaces, incorporating controls and interactive elements accessible with both the mouse and the keyboard.
- **Text alternatives**: Provide textual descriptions for images or videos so that people with visual or hearing disabilities can understand the content.

Web accessibility is essential for inclusion and equal access to information and online services. Complying with accessibility standards and guidelines, such as those established by the World Wide Web Consortium (W3C) in the Web Content Accessibility Guidelines (WCAG), is essential to create an accessible web and reach a wider audience.

### Web accessibility measurement

Web accessibility is measured through different techniques and evaluations. Some of the most common forms are:

- **Manual evaluation**: Consists of manually reviewing the website or application to identify possible accessibility barriers, including verifying the structure of the content, the correct use of tags, contrast, navigability, the presence of alternatives for non-textual content, and other key aspects.
- **Automatic evaluation tools**: Use automated tools that analyze the code and content of a website in search of accessibility problems. These tools can detect missing or incorrect elements, provide recommendations, and generate reports on the level of accessibility of the site.
- **User testing**: Involves people with disabilities or limitations testing and evaluating the accessibility of the website. Real users can provide valuable feedback to find barriers and identify areas for improvement.
- **Compliance audit**: Consists of evaluating whether the website complies with established accessibility standards and guidelines, such as the W3C's WCAG.

Web accessibility is an ongoing process that you must perform periodically to ensure that a website or application is always accessible, especially during development and update phases. It is essential to consider the needs and feedback of users with disabilities, as they are the ones who can best evaluate the accessibility of the site.


### Accessibility in Modyo

The implementation of accessibility in Modyo varies depending on the project and its objectives. However, we recommend following these general criteria:

- **Define the level of compliance**: Establish the target level of accessibility (e.g., WCAG 2.1 Level AA).
- **Establish an evaluation method**: Define how compliance will be measured throughout the project.
- **Leverage the framework**: Use the accessible components that Bootstrap provides by default.
- **Manage text alternatives**: Ensure that all media in Modyo Content includes alternative text (alt text).
- **Use Liquid for media**: When embedding media, use Liquid tags instead of fixed URLs to dynamically obtain alternative descriptions from Modyo Content.

By following these criteria, you promote web accessibility in the development of projects in Modyo and allow a greater number of users to access and enjoy the online experience in an inclusive way.
