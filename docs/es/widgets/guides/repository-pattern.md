---
search: true
---

# Estructura de repositorio

## Patrón de diseño de repositorio

El Patrón de Diseño de Repositorio es uno de los más populares para crear una aplicación de nivel empresarial. Nos restringe a trabajar directamente con los datos de la aplicación y crea nuevas capas para las operaciones de la base de datos, la lógica de negocio y la interfaz de usuario de la aplicación.

Por qué debería usar el Patrón de Diseño de Repositorio.

1. El código de acceso a los datos puede ser reutilizado.

2. Es fácil de implementar la lógica del dominio.

3. Nos ayuda a desacoplar la lógica.

4. La lógica de negocio puede ser probada fácilmente sin acceso a los datos.

5. También es una buena manera de implementar la inyección de dependencia que hace que el código sea más testeable.

## Implementación en un Widget

Este es un ejemplo de como implementar éste patron en un Widget.

:::tip Requisitos previos

1. Conocimiento básico de patrones de diseño, especialmente el Patrón de Diseño de Repositorio
2. Conocimientos básicos de Vue.js y Vuex
3. Conocimiento básico de JavaScript

:::

Para consumir datos con Vue.js usando el patrón de diseño de repositorio que nos ayuda a desacoplar, siga estos simples pasos.

### 1. Crear una carpeta "repositories" dentro de la carpeta `src` del Widget.

   ```sh
   cd src && mkdir repositories
   ```

### 2. Crear una carpeta "clients" (Podría tener cualquier nombre, pero se recomienda y usa _clients_)

   Crearé una carpeta de "clients" dentro de la carpeta "repositories", básicamente lo que estará dentro de esta carpeta son los diferentes Clientes HTTP que podrías querer usar, por ejemplo, si quieres usar **ModyoSDK**, Axios, Vue-resource etc.

   ```sh
   cd repositories && mkdir clients
   ```

### 3. Crear una archivo `xxxClient.js`: Éste contiene toda la configuración de la API del cliente incluyendo todos los métodos CRUD, por ejemplo `ModyoClient.js`.

   Podemos crear diferentes archivos para cada Cliente que utilicemos, por ejemplo, uno para Axios y otro para **ModyoSDK**

   Si vas a usar varios Clientes HTTP que comparten información para la configuración de estos, puedes crear un archivo config.js

   ```sh
   touch ModyoClient.js && touch ApiClient.js
   ```

   Para **ModyoClient** y utilizando [**ModyoSDK**](/platform/content/public-api-reference.html#sdk-de-liquid), la configuración es la siguiente:

   ```js
   import { Client } from "@modyo/sdk";
   import { accountUrl } from "./config/modyo.config";

   // Get page language from modyo, change to your needs
   const LANG = window?.liquid?.lang ?? "es";

   export default new Client(accountUrl, LANG);
   ```

   Para **ApiClient** y utilizando [**Axios**](https://github.com/axios/axios), la configuración es la siguiente:

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

### 4. Crear los Repositorios

   En estos archivos están las diferentes operaciones de la API que se harán dentro de una característica particular del Widget.

   Por ejemplo, para consumir POSTS con el ModyoSDK creamos un archivo "PostRepository.js" dentro de la carpeta `repositories` y copiamos el siguientes código.

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

   En el código de arriba definimos y exportamos todas nuestras peticiones API que necesitamos

   :::tip Importante
   Debemos importar el archivo del Cliente HTTP correspondiente en todos Repositorios que lo necesiten. En este ejemplo "ModyoClient"
   :::

### 5. Crear el archivo "RepositoryFactory.js"
   Creamos un archivo dentro de la carpeta `repositories` llamado `RepositoryFactory` para exportar todos los diferentes repositorios que hemos creado, de esta manera es más fácil usarlos en cualquier parte de nuestro Widget.

   ```sh
   touch  RepositoryFactory.js
   ```

   En este archivo pegamos el siguiente código

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

Hemos terminado de configurar nuestro Patrón de Repositorios. Si seguiste los pasos deberías tener una estructura de archivos similar a esta:

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

## ¿Cómo usamos nuestro Patrón de Repositorios?

Ya que estamos trabajando con Vue.js, les mostrare cómo usarlo en los componentes de Vue y en el store de Vuex.

### En componentes de Vue (SFC)

Creamos un componente para los POSTS e importamos el repositorio como se muestra a continuación

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

### En el Store de Vuex

En el archivo "actions.js" que se encuentra en la carpeta "store" del Widget pegamos lo siguiente

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
