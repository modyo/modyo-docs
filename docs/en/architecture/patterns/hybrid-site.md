---
search: true
---

# Hybrid Site

At Modyo, hybrid sites combine features from public and private sites. They allow anonymous interactions, while reserving functions for registered users.

Hybrid sites are useful for e-commerce, digital onboarding, and personalizing experiences after login.

### Implementing Hybrid Sites in Modyo

To implement a hybrid site in Modyo, you must use a technique that combines a public site with the addition of a user realm activated in specific areas of the site (private zone). Once the user logs in, you can activate new options in the menu, which lead them to pages marked as _private_ with information relevant to the user in session or to make calls through an external integration API.

Hybrid sites, having the presence of a user realm, do not allow the same level of cache as public sites, so their use must be justified and must provide distinctive functionality to authenticated users.


### Content Segmentation

Content segmentation personalizes and adapts the content shown to users, according to criteria or _segments_. This strategy is based on understanding different audiences or groups of users and seeks to provide them with a more relevant and personalized experience.

Segments can be defined by a variety of criteria, including:

- **User behavior:** pages visited, purchases made, or previous interactions with the site or application.
- **Demographic information:** details such as age, gender, location, education, and other user demographics.
- **User Interests**: What is known or inferred to be of interest to the user, based on their past behaviors or on the information provided.
- **Stage in the customer journey**: point where the user is in the customer journey or in the sales funnel. For example, a user could be in the discovery, consideration, decision, or loyalty stage.

In Modyo, segments are defined individually for each user domain, allowing multiple segments to be created in parallel. These segments can then be applied to both content and web applications.

:::tip Segments
For more information on creating segments in Modyo, see the [segments] section (/en/platform/customers/segments).
:::

### Using PWA

Implementing a Progressive Web App (PWA) on hybrid sites can be a challenge, as it is necessary to differentiate the parts of the site that are publicly accessible from those that are only for registered users.

A PWA is an app that can be installed on devices and must display content adapted and relevant to the user's session. Rather than replicating the look and feel of a conventional public site, it should provide a personalized experience that fits the user's preferences and needs. Otherwise, it would be similar to turning a public site into an application, which can lead to an unsatisfactory user experience.
