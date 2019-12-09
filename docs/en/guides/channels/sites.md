---
search: true
---

# Sites

<img src="/assets/img/channels/sites/sites-index.jpg" style="border: 1px solid #EEE;"/>

This is where you must operate to create Sites and minisites within the platform. In this case, the operation of Sites implies all the development, design and navigation flow. If you want to add content to each of them, it must be added in the Content section.

Upon entering, you will see that there are 4 states:

<img src="/assets/img/channels/sites/filters-sites.jpg" width="300"/>

- Enabled (Default state in which the newly created Sites and those that are online remain)
- Hidden (Sites created that only the user can see online)
- Development (Sites transferred to other users who are working on them)
- Disabled (Sites that have been discarded)

To create a Site, you just have to click on the **New** tab, which will allow you to designate the name and host, and then a template for its appearance and structure.

After that, you can see it in "Enabled" mode, which means that it is online to work.

## Site Configuration

The configuration of the Site will allow us to open the options of our platform, so that it is seen differently by the visitors, customers, developers and administrators of the Site. In addition, we can modify options that allow us to improve our appearance in search engines and the vision of some of the data that the public has access to when we reach our pages.

<img src="/assets/img/channels/sites/config-site.jpg" width="250"/>

### General

Within this section, we can configure the following data:

- **Site Name**: The name of your Site, this field is used as the default title for the SEO of your Site.
- **Description**: A brief description of your Site that will be used as the default value for the SEO of the Site.
- **Site Logo**: Image that will be used in the upper left as the Site logo.
- **Language**: The language in which your Site will be. This value is important when using [content on a Site](/guides/channels/templates.html # views-for-content).
- **[Team Review](/guides/platform/team-review.html)**
- **Time Zone**: The time zone in which the date and time fields will be displayed within the Site.
- **Favicon**: Image that appears next to the address bar
- **Apple icon**: Image that appears on mobile devices when using the Site as an application
- **Associated spaces**: Related spaces that may show your tickets on this Site.

### PWA

<img src="/assets/img/channels/sites/pwa-site.jpg" width="600" style="margin-top: 40px; border: 1px solid #EEE;" >

::: danger
Missing description
Mannifers.json
Serviceworker.js
Available variables
:::

### SEO

<img src="/assets/img/channels/sites/seo-site.jpg" width="400" style="margin-top: 40px; border: 1px solid #EEE;" >

SEO (Search Engine Optimization) is our key to appear in different search engines. A good configuration depends on whether users reach our Site through them.

The options to configure are:

- **Tagline**: Description that will appear in the search engines, under the name of the Site
- **Keywords**: Words that users will look for and that we want our Site to appear.
- **Sitemap**: File that allows search engines to better index the content of our Site. We can let Modyo automatically handle this option or we can modify it manually so that it focuses only on a particular content.
- **Robots.txt**: In this file we give the instructions to the search engine to categorize our Site. We can also configure this file so that the page is not indexed directly.

### Restrictions

<img src="/assets/img/channels/sites/restrictions-site.jpg" width="250" style="margin-top: 40px; border: 1px solid #EEE;" >

Restrictions allow us to configure the privacy of the Site.

- If the Site is public, then everyone can see the Site.
- If the Site is private, only users with a session of Modyo can view the Site.
- If the Site is private, but the home is public, the home will be displayed to everyone who arrives at our home, but when you navigate to any other page of the Site, you will be asked to register or log in.

In addition, it allows us to configure the display of the targeted content of our registered users, so that it can only be seen on the "My" page (personal page of each user) or on any page that navigates on the Site.

### Domains

<img src="/assets/img/channels/sites/domains-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

The Domains section will let you know where our Site is publicly located, so it is essential that each member of the platform is aware of the changes made here.

The variables you can change here are:

- **Host**: Where our Site is located within the server.
- **Activate custom domains**: If we want within our domain, there are Sites with a custom URL or "custom host."
- **Enable SSL on our Site**: It is necessary to have a certificate inside our server to enable it.
- **Primary domain**: Address of our Site.
- **Alternative domain**: Secondary address to redirect if the first one fails.

### Team members

<img src="/assets/img/channels/sites/members-site.jpg" width="500" style="margin-top: 40px; border: 1px solid #EEE;" >

To order the work, Modyo allows to select the members of the team that will work in each Site and thus have access to the writing, review and/or publication.

To do this, the administrator who created the Site can manually assign users and the default roles that enable each of the functions.

To add a user to the Site, select the primary button **+ New** in the upper right of the view, in the modal select an administrator and assign a role, then press "Add" so that that administrator is part of the Site team.

You can modify the role of any of the associated administrators by clicking on its name. A modal will be raised, where you can select the new role. Press "save" to confirm the change.

To remove administrators from a Site, you can select them using the checks to the left of their name, and then clicking on the button at the bottom of the list **Delete**.

The available roles are:

- **Developer**: You can create, modify and submit pages, widgets, menu and templates for review.
- **Developer CLI**: You can create, modify and submit pages, widgets, menu and templates for review. You can also push widgets from external applications.
- **Reviewer**: You can create, modify, submit for review and approve pages, widgets, menu and templates, and publish them when the review conditions are met.
- **Admin**: You can create, modify, submit for review and approve pages, widget, menu, and templates. You can publish without going through the validations of the team review. You can also modify the configuration of the Site.

#### Developer

It is the user who is in charge of the structural development of resources, the creation and editing of content. Everything you do, has to go to review.

This user cannot publish, delete, return to previous versions of resources (Rollback) or change the configuration.

There is a variation of this role with the name "CLI" that in addition to developer permissions, allows them to push widgets from external applications, such as [modyo-cli](/guides/channels/widgets.html # modyo-cli ).

#### Reviewer

They correct the work done by Developers, approving or discarding what is already done, and then publishing.

You cannot edit the Site settings.

#### Admin

Site Administrator, has access to the two previous roles, in addition to being able to configure the entire Site.

This user is different from the Default Admin. The Site Admin can only configure the external Site, but cannot change anything on the platform.

If necessary, users of the Site who already have previous roles can be deleted. To do this, just click on the user and the Delete action.
