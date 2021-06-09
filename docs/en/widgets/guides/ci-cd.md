---
search: true
---

# CI/CD with GitHub

One of the advantages of working with Widgets locally using the Modyo CLI ([**modyo-cli**] (/es/platform/channels/widgets.html #modyo -cli)) is that you can use tools to automate code review (**CI**) and make continuous delivery or continuous deployment (**CD**)

Catalog Widgets, as well as base templates to start a new project, provide _"recipes"_ from [**GitHub Actions**](https://GitHub.com/features/actions) that you can use to run some of the most common CI/CD tasks quickly and easily.

These _"recipes" _ are in the **README.md** file located in the Widget's `.github` folder.

```treeview {1, 5}
├── .Github/
│ ├── pr-labeler.yml
│ ├── release-drafter.yml
│ ── workflows/
│ ├── README.md <- * recetas * -> 
│ ├── pr-labeler.yml
│ ── release-draft.yml
├── src/
│ ├── App.vue
```

The recipes you can find are:

- Build and publish to Modyo
- Run eSint, Stylelint and Unit Tests on pull quests
- Publish package on GitHub registry
- Release draft
- Release draft config
- PR Labeler
- PR Labeler config

:::tip
Each of these is documented and explained in the**README.md** file
:::

### Deploying a Widget with GitHub Actions

In order to load a Widget using **GitHub Actions** we need the _"recipe"_ **Build and Publish** that makes use of the command [**PUSH**](/es/platform/channels/widgets.html #modyo -cli-push-name) of the **Modyo CLI** and for that we need a **token** which authorize it to do so.

To get a **token** we first need to create an **API Access** at the site's own account level. We're going to **Settings (1) —> API access (2) —> New API access (3) —> Create (4) **.

![1](/assets/img/widgets/ci-cd/1.png)

After creating the access API we need to generate a token for the user who will load the Widget.

:::tip
We recommend creating a new user that has permissions and the token to upload and publish Widgets from an CI/CD service.
:::

**Again at account level:**

1. Settings
2. Team (we select or create a user)
3. API access tab
4. Select the Api access we created earlier
5. Create Token

![2](/assets/img/widgets/ci-cd/2.png)

We now have the**token** we can use it to configure our repository and so the GitHub action will have access to it.

![2](/assets/img/widgets/ci-cd/3.png)

::: danger Important
You should never share or publish the **TOKEN** or sensitive information in the repository!
That is why it is recommended to use environment variables, .env file that is listed in the project's .gitignore, locally and make use of the [secrets](https://docs.GitHub.com/actions/reference/encrypted-secrets) on GitHub.
:::
