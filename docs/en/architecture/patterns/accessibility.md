---
search: true
---

# Accessibility

Web accessibility is the practice of designing and developing websites and applications so that all individuals, regardless of their abilities or limitations, can access and utilize online resources and services. Its primary objective is to eliminate barriers that prevent people with disabilities from fully accessing, interacting with, and benefiting from online content.

Web accessibility is rooted in the principle of universal design, which aims to create products and environments usable by the widest possible range of people, irrespective of their skills or abilities. This includes considering individuals with visual, auditory, motor, or cognitive disabilities.

Key aspects of web accessibility:

- **Compatibility with assistive technologies**: Ensure that assistive technologies, such as screen readers or specialized keyboards, can effectively navigate and access content.
- **Semantic HTML**: Use HTML tags correctly to structure and describe content clearly, enabling individuals with visual or cognitive disabilities to understand the presented information.
- **Contrast and readability**: Ensure adequate contrast between text and background to facilitate reading for people with visual disabilities or perception difficulties.
- **Keyboard navigation**: Design intuitive and easy-to-navigate interfaces, incorporating controls and interactive elements accessible via both mouse and keyboard.
- **Text alternatives**: Provide textual descriptions for images or videos so that people with visual or hearing disabilities can comprehend the content.

Web accessibility is crucial for inclusion and equitable access to information and online services. Adhering to accessibility standards and guidelines, such as those established by the World Wide Web Consortium (W3C) in the Web Content Accessibility Guidelines (WCAG), is fundamental for creating an accessible web and reaching a broader audience.

### Web accessibility measurement

Web accessibility is measured through various techniques and evaluations. Some of the most common forms include:

- **Manual evaluation**: Involves manually reviewing the website or application to identify potential accessibility barriers. This includes verifying content structure, correct tag usage, contrast, navigability, the presence of alternatives for non-textual content, and other key aspects.
- **Automated evaluation tools**: Utilize automated tools that analyze a website's code and content for accessibility issues. These tools can detect missing or incorrect elements, provide recommendations, and generate reports on the site's accessibility level.
- **User testing**: Involves individuals with disabilities or limitations testing and evaluating the website's accessibility. Real users can provide invaluable feedback to identify barriers and areas for improvement.
- **Compliance audit**: Consists of evaluating whether the website adheres to established accessibility standards and guidelines, such as the W3C's WCAG.

Web accessibility is an ongoing process that requires periodic review to ensure a website or application remains accessible, especially during development and update phases. It is essential to consider the needs and feedback of users with disabilities, as they are best positioned to evaluate the site's accessibility.


### Accessibility in Modyo

The implementation of accessibility in Modyo varies depending on the project and its objectives. However, we recommend adhering to these general criteria:

- **Define the level of compliance**: Establish the target level of accessibility (e.g., WCAG 2.1 Level AA).
- **Establish an evaluation method**: Define how compliance will be measured throughout the project.
- **Leverage the framework**: Utilize the accessible components that Bootstrap provides by default.
- **Manage text alternatives**: Ensure that all media in Modyo Content includes alternative text (alt text).
- **Use Liquid for media**: When embedding media, use Liquid tags instead of fixed URLs to dynamically obtain alternative descriptions from Modyo Content.

By following these criteria, you promote web accessibility in Modyo projects, enabling a greater number of users to access and enjoy the online experience inclusively.