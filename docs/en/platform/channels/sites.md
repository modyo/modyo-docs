---
search: true
translated: true
---

# Sites

<img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;"/>

This is where you work to create sites and web-based applications within the platform. Building in Sites focuses on all the development, design and navigation flow and structure. If you want to add content to a site or web-based application, you must first create content in the [Content](/en/platform/content/) section.

Upon entering, you will see that there are 4 statuses:

<img src="/assets/img/channels/sites/filters-sites.jpg" width="300"/>

- Enabled (Default state of functioning online digital channels and newly created Sites)
- Hidden (Sites created that only users with access can see)
- Development (Sites only accessible by backend users who are working on them)
- Disabled (Sites that have been disabled)

To create a site, you just have to click on the **New** tab, which will allow you to designate the name and host, and then select a base template for the site's appearance and structure.

After that, you can see it with the status "Enabled", which means that it is online to work.

## Site settings

Site settings allow us to configure various options of your site, such as set up its visibility depending on whether the user is a visitor, customer with a session, a developer or an administrator. In addition, you can modify options that allow us to improve your site's appearance in search engines and the visibility of some of the content that the public has access to when they reach your pages.

<img src="/assets/img/channels/sites/config-site.jpg" width="250"/>

### General

Within this section, you can configure the following data:

- **Site Name**: The name of your site, this field is used as the default title for SEO purposes (this can be modified).
- **Description**: A brief description of your site that is used as the default description for the SEO of the site (this can be modified).
- **Site Logo**: An image that displays in the upper left as your site logo in the Navigation bar.
- **Language**: The language of your site. This value is important because it impacts [how content appears](/en/platform/channels/templates.html#views-for-content) in your site when consuming it through Modyo Content. 
- **Team Review**: This is an important review system with [its own separate explanation](/en/platform/core/team-review.html).
- **Time Zone**: Selects the time zone that your date and time fields use within your site.
- **Favicon**: Image that appears in the address bar.
- **Apple icon**: Image that appears on mobile devices when using the site as an application.
- **Linked spaces**: Select spaces to link to this digital channel. Changes in any content from a linked space automatically update within your channel. By contrast, changes to content in non-linked spaces will only update within your channel after a given time. Depending on your session activity and account deployment type, the time to update is usually between 5 to 30 minutes.

### PWA

<img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;">

::: danger
Missing description
Manifest.json
Serviceworker.js
Available variables
:::

### SEO

<img src="/assets/img/channels/sites/seo-site.jpg" width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

SEO (Search Engine Optimization) is key to high-ranking pages in your channels across various search engines. Good SEO depends on whether users reach your site through these search engines. SEO is a large topic, but at a general site/digital channel level, there are a few important configurations to consider.

The options listed in this section help improve your SEO across a particular channel:

- **Tagline**: General description that appears in search results, listed under the name or "title" of your site.
- **Keywords**: Associated words relevant to your site that users search for that appear in the *keywords* meta tag. Devalued by Google, this field is less relevant today, but may be used by other search engines. 
- **Custom sitemap.xml file**: This file allows search engines to better index the content of your site. Modyo automatically updates your sitemap file by default, but you can also modify it manually so that it focuses only on a particular pages and content.
- **Custom robots.txt file**: This file is part of the the robots exclusion protocol (REP), a group of web standards that regulate how robots crawl the web, access and index content, and serve that content up to users. In practice, this file determines whether certain user agents (web-crawling software) can or cannot crawl parts of a website. These crawl instructions are specified by “disallowing” or “allowing” the behavior of certain (or all) user agents. You can modify this file to provide custom instructions to site crawlers.

### Restrictions

<img src="/assets/img/channels/sites/restrictions-site.jpg" width="250" style="margin-top: 40px; border: 1px solid #EEE;" >

Restrictions allow you to configure the privacy of your site.

- If the privacy level is set to public, then it is visible to everyone.
- If the privacy level is set to private, then this site is only visible to users with an active session (authenticated login).
- If the privacy level is set to private, but the option "Show home page to public visitors" is checked, then the home page is visible to everyone, while the rest of the site requires users with an active session.

### Domains

<img src="/assets/img/channels/sites/domains-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

The Domains section is where you configure where and how your site is publicly located. It is essential that each member of the platform be aware of any changes made here.

The options you configure here are:

- **Host**: This name designates where your site is located within the server, e.g. the host name 'my-site' would be located at https://example.modyo.cloud/my-site. This option only accepts alphanumeric characters, and a few other valid non-space characters, such as dashes "-" and underscores "_".
- **Enable custom domains**: Select this option if you have a registered custom domain, and want to configure it here. Make sure to follow the instructions in the description.
- **Enable SSL on this site**: You are required to have a valid SSL certificate installed in order to enable this setting.
- **Primary domain**: This is the main address of your site. Alternative domains redirect to this domain through HTTP 302.
- **Alternative domain 1 & 2**: These secondary addresses redirect if the primary one fails.

### Team members

<img src="/assets/img/channels/sites/members-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

The Team members section of your Site settings allows you to select eligible users from your main Team (set at the account level), and assign them roles to work under within your site. These roles start with editing privileges, and can expand to include reviewing, publishing, and configuring site settings.

To do this, the administrator who created the site must manually assign team members and their roles. Once the site creator adds other admins, these too can add more team members.

To add a user to the Site, select the primary button **+ New** in the upper right of the view. In the modal that appears, search for and select from among the list of eligible users. Once selected, assign them one of three roles (Developer, Reviewer, Admin), and then press "Create".

You can modify the role of any of team member by clicking their name. In the modal that apepars, select a new role from the drop down, then press "Update" to confirm the change.

To remove a team member, click the checkbox next to their name, and then the **Delete** button that appears at the bottom of the page.

The available roles are:

- **Developer**: Can create, modify and submit pages, widgets, menu and templates for review.
- **Developer CLI**: Can create, modify and submit pages, widgets, menu and templates for review. Can also push widgets to the platform from external applications.
- **Reviewer**: Can create, modify, and submit pages, widgets, menu and templates for review and approval, as well as publish them when the correct review conditions are met.
- **Admin**: Can create, modify, and submit pages, widgets, menu and templates for review and approval, as well as publish them without going through the validations of the team review if necessarty. Admins can also modify site configurations.

#### Developer

Developers are in charge of the structural development of resources, design and the creation of or integration with content. Everything developers do has to go to review, or be directly published by a higher role.

Developers cannot publish, delete, restore resources to previous versions (Rollback) or make changes to the site settings.

There is a variation of the Developer role with the name "CLI". In addition to developer permissions, this "Developer CLI" role has the ability to push widgets from external applications, such as the [modyo-cli](/en/platform/channels/widgets.html#modyo-cli).

#### Reviewer

Reviewers correct the work done by Developers, approving or rejecting their changes, and then publishing.

Reviewers cannot edit the Site settings.

#### Admin

The Admins role has access to all the permissions of the two previous roles, and also has access to the Site settings.

This team member is different from the account-level Default Admin. A site Admin can only configure a site, and cannot make any changes to the platform itself.
