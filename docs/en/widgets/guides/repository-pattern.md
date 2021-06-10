---
search: true
---

# Repository structure

### Repository Design Pattern

The Repository Design Pattern is one of the most popular for creating an enterprise-grade application. It restricts us to work directly with application data and creates new layers for database operations, business logic, and application user interface.

Why you should use the Repository Design Pattern.

1. The access code to the data can be reused.

2. It is easy to implement domain logic.

3. It helps us undock logic.

4. Business logic can be easily tested without access to data.

5. It is also a good way to implement dependency injection that makes code more testable.

### Deploying in a Widget

This is an example of how to implement this pattern in a Widget.

:::tip Prerequisites

1. Basic knowledge of design patterns, especially the Repository Design Pattern
2. Basic knowledge of Vue.js and Vuex
3. Basic knowledge of JavaScript

:::

To consume data with Vue.js using the repository design pattern that helps us undock, follow these simple steps.

#### 1. Create a "repositories" folder within the `src` folder of the Widget.

   ```sh
   cd src && mkdir repositories
   ```

#### 2. Create a "clients" folder (It could have any name, but we recommend using _clients_)

    It will create a "clients" folder inside the "repositories" folder. Basically, this folder will contain the different HTTP Clients you might want to use, for example if you want to use **Modyosdk**, Axios, Vue-resource etc.

   ```sh
   cd repositories && mkdir clients
   ```

#### 3. Create a `XXXClient.JS` file: This contains all client API settings including all CRUD methods, for example `ModyOClient.js`.

   We can create different files for each Customer we use, for example, one for Axios and another for **Modyosdk**

   If you are going to use multiple HTTP Clients that share information for their configuration, you can create a config.js file

   ```sh
   touch ModyoClient.js && touch ApiClient.js
   ```

   For **ModyOClient** and using [**ModyosDK**](/platform/content/public-api-reference.html #sdk -de-liquid), the configuration is as follows:

   ```js
   import { Client } from "@modyo/sdk";
   import { accountUrl } from "./config/modyo.config";

   // Get page language from modyo, change to your needs
   const LANG = window?.liquid?.lang ?? "es";

   export default new Client(accountUrl, LANG);
   ```

   For **Apiclient** and using [**Axios**](https://github.com/axios/axios), the configuration is as follows:

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

#### 4. Create the Repositories

   These files contain the different API operations that will be done within a particular feature of the Widget.

   For example, to consume POSTS with the ModyosDK, we create a file "PostRepository.js" inside the `repositories` folder and copy the following code.

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

   In the above code we define and export all our API requests that we need

:::tip Important
We must import the corresponding HTTP Client file into all Repositories where it is required. In this example "ModyoClient"
:::

#### 5. Create the file "RepositoryFactory.js"
   We create a file inside the `repositories` folder called `RepositoryFactory` to export all the different repositories we have created, so it is easier to use them anywhere in our Widget.

   ```sh
   touch  RepositoryFactory.js
   ```

   In this file we paste the following code

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

```tree {3-12}
├── src/
│ ├── components/
│ ├── repositories/
│ │ ├── ApiRepository.js
│ │ ├── PostRepository.js
│ │ ├── RepositoryFactory.js
│ │ ── clients/
│ │ ├── ApiClient.js
│ │ ├── ModyoAuthClient.js
│ │ ├── ModyoClient.js
│ │ ── config/
│ │ ── modyo.config.js
│ ├── store/
──...
```

### How do we use our Repository Pattern?

Since we're working with Vue.js, we'll review how to use our repository pattern in the Vue components and in the Vuex store.

#### In Vue Components (SFC)

We create a component for the POSTS and import the repository as shown below

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

#### In the Vuex Store

In the file "actions.js" located in the Widget's "store" we paste the following

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
