---
search: true
---

# Hybrid Site

In Modyo, hybrid sites combine features of both public and private sites, enabling anonymous interactions while reserving specific functionalities for registered users.

They are particularly useful for e-commerce, digital onboarding, and personalizing post-login experiences.

### Implementing Hybrid Sites in Modyo

To implement a hybrid site in Modyo, a public site is combined with the activation of a user realm in specific areas (private zone). After a user logs in, new menu options can be enabled, directing them to _private_ pages with relevant authenticated user information or making calls to external integration APIs.

Since hybrid sites incorporate a user realm, they do not allow the same level of caching as public sites. Therefore, their use must be justified by the need to offer distinctive functionalities to authenticated users.


### Content Segmentation

Content segmentation involves personalizing and adapting the content displayed to users based on specific criteria or _segments_. This strategy is built on understanding different audiences or user groups and aims to provide them with a more relevant and tailored experience.

Segments can be defined by various criteria, including:

- **User behavior**: Pages visited, purchases made, or previous interactions with the site or application.
- **Demographic information**: Details such as age, gender, location, education, and other user demographics.
- **User interests**: Known or inferred interests, based on past behaviors or provided information.
- **Stage in the customer journey**: The user's current point in the customer journey or sales funnel (e.g., discovery, consideration, decision, or loyalty).

In Modyo, segments are defined individually for each user domain, allowing multiple segments to be created in parallel. These segments can then be applied to both content and web applications.

:::tip Segments
For more information on creating segments in Modyo, see the [segments](/en/platform/customers/segments) section.
:::

### Use of PWA

Implementing a Progressive Web App (PWA) on hybrid sites can be challenging, as it requires differentiating publicly accessible sections from those restricted to registered users.

A PWA is an installable application that must display content adapted and relevant to the user's session. Instead of merely replicating the appearance of a conventional public site, it should offer a personalized experience that aligns with the user's preferences and needs. Otherwise, it would resemble converting a public site into an application, which could lead to an unsatisfactory user experience.
