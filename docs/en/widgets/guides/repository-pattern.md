---
search: true
---

# Repository pattern

Develop a repository pattern in a widget to consume data with Vue.js.

The repository design pattern is one of the most popular for creating an enterprise-grade application. A restriction is that you work directly with application data and creates new layers for database operations, business logic, and application user interface.

Advantages of the repository pattern:

- The access code to the data can be reused.
- It is easy to implement domain logic.
- It helps us to decouple the application's logic.
- Business logic can be easily tested without access to data.
- It's a good way to implement dependency between code so that it's easier to test.

#### Prerequisites

- Experience with design patterns, especially the Repository pattern
- Experience with Vue.js and Vuex
- Experience with JavaScript

## 1. Create a "repositories" folder 

Create a "repositories" folder within the "src" folder of the Widget. 

   ```sh
   cd src && mkdir repositories
   ```

## 2. Create a "clients" folder

Create a "clients" folder within the "repositories" folder. This directory will contain the different HTTP Clients that communicate with the repository, for example: **ModyoSDK**, Axios, Vue-resource, etc.

   ```sh
   cd repositories && mkdir clients
   ```

## 3. Create a `XXClient.js` file: 

This contains all the client API configuration including CRUD methods, for example `ModyoClient.js`.

Different files have to be created for each Client, for example, one for Axios and one for **ModyoSDK**.

For **ModyoClient** and [**ModyoSDK**](/en/platform/content/public-api-reference.html#liquid-sdk), copy the following code:

   ```sh
   touch ModyoClient.js
   ```

   ```js
   import { Client } from "@modyo/sdk";
   import { accountUrl } from "./config/modyo.config";

   // Get page language from modyo, change to your needs
   const LANG = <window.liquid.lang> ?? "es";

   export default new Client(accountUrl, LANG);
   ```

For **ApiCustom** and using [**Axios**](https://github.com/axios/axios), the configuration is as follows:

   ```sh
   touch ApiClient.js   
   ```

   ```js
   import axios from "axios";
   import ModyoAuth from "./ModyoAuthClient";
   import { externalApiBase } from "./config/modyo.config";

   const apiClient = axios.create({
     baseURL: externalApiBase,
   });

   const injectToken = async (config) => {
     try {
       const response = await ModyoAuth.get("access_token");
       const newConfig = config;
       newConfig.headers.authorization = `Bearer ${response.data.access_token}`;
       return newConfig;
     } catch (error) {
       throw new Error("Unauthorized");
     }
   };

   apiClient.interceptors.request.use(injectToken);

   export default apiClient;
   ```

:::tip Tip
If you use multiple HTTP Clients that share information for their configuration, you can create a config.js file
:::

## 4. Create the Repositories

   In these files are the different API operations that will be performed within a particular feature of the Widget. In the code we define and export the requests that are needed.

   For example, to consume POSTS with ModyoSDK we create a _PostRepository.js_ file inside the `repositories` folder and copy the following code:

   ```sh
   touch PostRepository.js
   ```

   ```js
   import ModyoSdk from "./clients/ModyoClient";

   import { space, type } from "./clients/config/modyo.config";

   const content = ModyoSdk.getContentType(space, type);
   const privateContent = ModyoSdk.getContentType(space, type, false);

   export default {
     get() {
       return content.getEntries();
     },
     getTop(number) {
       const filter = content.Filter().Pagination(1, number);
       return content.getEntries(filter);
     },
     getPrivate() {
       return privateContent.getEntries();
     },
     getPrivateTop(number) {
       const filter = content.Filter().Pagination(1, number);
       return privateContent.getEntries(filter);
     },
     getEntry(id) {
       return privateContent.getEntry(id);
     },
   };
   ```

   :::tip Tip
   You must import the corresponding HTTP Client file into all repositories that need it. In this example "ModyoClient"
   :::

## 5. Create the file "RepositoryFactory.js"
   We create a file inside the "repositories" folder called `RepositoryFactory` to export all the different repositories we've created, so it's easier to use them anywhere in the Widget.

   ```sh
   touch  RepositoryFactory.js
   ```

   Paste the following code:

   ```js
   import PostRepository from "./PostRepository";
   import ApiRepository from "./ApiRepository";

   const repositories = {
     posts: PostRepository,
     api: ApiRepository,
   };
   export default {
     get: (name) => repositories[name],
   };
   ```

We've finished setting up our Repository Pattern. If you followed the steps you should have a file structure similar to this:

```tree{3-12}
├── src/
│   ├── components/
│   ├── repositories/
│   │   ├── ApiRepository.js
│   │   ├── PostRepository.js
│   │   ├── RepositoryFactory.js
│   │   └── clients/
│   │       ├── ApiClient.js
│   │       ├── ModyoAuthClient.js
│   │       ├── ModyoClient.js
│   │       └── config/
│   │           └── modyo.config.js
│   ├── store/
└── ...
```

## How to use the Repository Pattern with Vue.js?

To add the created repositories to the Vuex store for later consumption in Vue components, follow these steps:

#### In Vue Components (SFC)

Create a component for POSTS and import the repository:

```vue
<template>
  <div class="row">
    <Post v-for="(post, i) in posts" :key="i" :posts="post" />
    <div class="col-lg-8 col-md-10 mx-auto">
      <div class="clearfix">
        <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
      </div>
    </div>
  </div>
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const PostRepository = Repository.get("posts");

import Post from "./Post";
export default {
  name: "Posts",
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts: async function() {
      const { data } = await PostRepository.getTop(3);
      this.posts = data;
    },
  },
};
</script>
```

#### In Vuex Store

In the `actions.js` file located in the "store" folder of the Widget we paste the following:

```js
import Repository from "../repositories/RepositoryFactory";

const PostRepository = Repository.get("posts");

export default {
  async getPosts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await PostRepository.getTop(3);
      const posts = response;
      commit("updatePosts", posts);
      return response;
    } catch (error) {
      return error;
    } finally {
      commit("setLoading", false);
    }
  },
};
```
