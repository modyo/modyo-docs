---
search: true
---

# Hybrid Site

In Modyo, hybrid sites combine features of public and private sites, allowing anonymous interactions and reserving functionalities for registered users.

They are useful in e-commerce, digital onboarding, and personalization of post-login experiences.

### Implementation of Hybrid Sites in Modyo

To implement a hybrid site in Modyo, a public site is combined with the activation of a user realm in specific areas (private zone). After logging in, new menu options can be enabled that direct to _private_ pages with relevant information for the authenticated user or that make calls to external integration APIs.

Since hybrid sites include a user realm, they do not allow the same level of caching as public sites. Therefore, their use must be justified by the need to offer distinctive functionalities to authenticated users.


### Content Segmentation

Content segmentation personalizes and adapts the content shown to users according to criteria or _segments_. This strategy is based on understanding audiences to provide a more relevant and personalized experience.

Segments can be defined by various criteria, including:

- **User behavior**: Pages visited, purchases made, or previous interactions with the site or application.
- **Demographic information**: Age, gender, location, education, and other user demographic data.
- **User interests**: Known or inferred interests, based on past behaviors or information provided.
- **Stage in the customer journey**: Point in the customer journey or sales funnel (e.g., discovery, consideration, decision, or loyalty).

In Modyo, segments are defined individually for each user domain, allowing multiple segments to be created in parallel. These segments can be applied to both content and web applications.

:::tip Segments
For more information on creating segments in Modyo, see the [segments](/en/platform/customers/segments) section.
:::

### Use of PWA

The implementation of a Progressive Web App (PWA) on hybrid sites can be a challenge, as it requires differentiating the publicly accessible sections from those restricted to registered users.

A PWA is an installable application that must display content adapted and relevant to the user's session. Instead of replicating the appearance of a conventional public site, it should offer a personalized experience that adjusts to the user's preferences and needs. Otherwise, it would be like turning a public site into an application, which could result in an unsatisfactory user experience.