---
search: true
---

# Hybrid Site

On the Modyo platform, hybrid sites are characterized by their combination of features typical of public and private sites. They allow anonymous interaction, while reserving certain features for users with a registered account.

Hybrid sites are often especially useful in e-commerce or digital onboarding contexts. However, they also provide value in situations where you want to personalize the browsing experience and the content viewed by the user after logging in.

### How do you implement hybrid sites with Modyo?

The implementation of hybrid sites within Modyo is done using a combined public site technique with the addition of a user kingdom, which will be activated in specific sections of the site (private area). Once the user logs in, new options can be activated in the menu, which can lead them to pages marked as “private” on which relevant information can be displayed to the user in session, or to make calls through an external integration API.

Hybrid sites, having the presence of a user kingdom, do not allow the same level of cache as 100% public sites. That is why their use must be justified and make it possible to offer real differentiating functionality to users who authenticate themselves.

### Content Segmentation

Content segmentation is a strategy focused on customizing and adapting the content shown to users, based on certain criteria or “segments”. This strategy is based on understanding different audiences or user groups and providing them with a more relevant and personalized experience.

Segments can be defined by a variety of criteria, including:

- **User Behavior**: What the user has done on the site or application, such as the pages they have visited, the purchases they have made, or their previous interactions with the site or application.
- **Demographic information**: details such as the user's age, gender, location, education, and other demographics.
- **User Interests**: What is known or inferred to interest the user, based on their past behaviors or on the information they have provided.
- **Stage in the customer journey**: point where the user is in the customer journey or in the sales funnel. For example, a user could be in the discovery, consideration, decision, or loyalty stage.

In Modyo, segments are established individually for each user domain, allowing multiple segments to be created in parallel. Subsequently, these segments can be applied both to content and to web applications.

:: :tip Segments
For more information on creating segments within Modyo, visit their [official documentation] (/en/platform/customers/segments).
:::

### Using PWA

Implementing a Progressive Web App (PWA) on hybrid sites can be a challenge, as it requires differentiating the parts of the site that are publicly accessible from those that are intended only for registered users.

A PWA, being an application installable on the device, must present content adapted and relevant to the user's session. Rather than replicating the look and feel of a conventional public site, it should offer a personalized experience that fits the user's preferences and needs. Otherwise, it would be similar to turning a public site into an application, which could result in an unsatisfactory user experience.



