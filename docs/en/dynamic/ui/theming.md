---
search: true
---

# Themes

The Dynamic Framework components have been created with a system of tokens and variables that allow you to adjust all the relevant aspects of your look and feel. To customize a design, it can be done in two ways, as we will see below.

### Variables in the Micro Frontend

The variables in the micro frontend are a convenient way to define customization within each template, thus allowing us not to depend on a central configuration structure. The variables within the template are defined in a variable file present in each of them and their values will only affect that micro frontend, having no effect on the rest of the components that are deployed as part of the web application.


### Web Application Variables

The variables of the web application are modified in Modyo and allow you to configure all the customizable aspects present in the framework in a centralized way. Variables are defined within the platform and passed to the design system using a Liquid template.

An advantage of using this method is that because it is centralized, it will be easier to consistently control and maintain the customizations applied, in addition to being able to reuse the same definitions beyond the micro frontend, in the Web application itself.