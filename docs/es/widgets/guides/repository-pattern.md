---
search: true
---

# Patrón de repositorio

Implementa un patrón de repositorio en un widget para consumir datos con Vue.js.

El patrón de diseño de repositorio es uno de los más populares para crear una aplicación de nivel empresarial. Tiene como restricción que se trabaja directamente con los datos de la aplicación y crea nuevas capas para las operaciones de la base de datos, la lógica de negocio, y la interfaz de usuario de la aplicación.

Ventajas del patrón de repositorio:

- El código de acceso a los datos puede ser reutilizado.
- Es fácil de implementar la lógica del dominio.
- Nos ayuda a desacoplar la lógica de la aplicación.
- La lógica de negocio puede ser probada fácilmente sin acceso a los datos.
- Es una buena manera de implementar la inyección de dependencia que hace que el código sea más fácil de probar.

#### Requisitos previos

- Conocimiento de patrones de diseño, especialmente el patrón de Repositorio
- Conocimiento de Vue.js y Vuex
- Conocimiento de JavaScript

## 1. Crear una carpeta "repositories" 

Crea una carpeta "repositories" dentro de la carpeta "src" del Widget. 

   ```sh
   cd src && mkdir repositories
   ```

## 2. Crear una carpeta "clients"

Crea una carpeta de "clients" dentro de la carpeta "repositories". Este directorio va a contener los diferentes Clientes HTTP que se comunican con el repositorio, por ejemplo: **ModyoSDK**, Axios, Vue-resource etc.

   ```sh
   cd repositories && mkdir clients
   ```

## 3. Crear una archivo `xxClient.js`: 

Éste contiene toda la configuración de la API del cliente incluyendo los métodos CRUD, por ejemplo `ModyoClient.js`.

Se tienen que crear diferentes archivos para cada Cliente que utilicemos, por ejemplo, uno para Axios y otro para **ModyoSDK**.

Para **ModyoClient** y [**ModyoSDK**](/platform/content/public-api-reference.html#sdk-de-liquid), copia el siguiente código:

   ```sh
   touch ModyoClient.js
   ```

   ```js
   import { Client } from "@modyo/sdk";
   import { accountUrl } from "./config/modyo.config";

   // Get page language from modyo, change to your needs
   const LANG = window?.liquid?.lang ?? "es";

   export default new Client(accountUrl, LANG);
   ```

Para **ApiClient** y utilizando [**Axios**](https://github.com/axios/axios), la configuración es la siguiente:

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
Si usas varios Clientes HTTP que comparten información para la configuración de estos, puedes crear un archivo config.js
:::

## 4. Crear los Repositorios

   En estos archivos están las diferentes operaciones de la API que se harán dentro de una característica particular del Widget. En el código definimos y exportamos las peticiones que se necesitan.

   Por ejemplo, para consumir POSTS con ModyoSDK creamos un archivo _PostRepository.js_ dentro de la carpeta `repositories` y copiamos el siguientes código:

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
   Debes importar el archivo del Cliente HTTP correspondiente en todos los repositorios que lo necesiten. En este ejemplo "ModyoClient"
   :::

## 5. Crear el archivo "RepositoryFactory.js"
   Creamos un archivo dentro de la carpeta "repositories" llamado `RepositoryFactory` para exportar todos los diferentes repositorios que hemos creado, de esta manera es más fácil usarlos en cualquier parte del Widget.

   ```sh
   touch  RepositoryFactory.js
   ```

   Pega el siguiente código:

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

## ¿Cómo usar el Patrón de Repositorios con Vue.js?

Para agregar los repositorios creados al store de Vuex para después utilizarlos en los components de Vue, sigue estos pasos:

#### En componentes de Vue (SFC)

Crea un componente para POSTS e importa el repositorio:

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

#### En Store de Vuex

En el archivo `actions.js` que se encuentra en la carpeta "store" del Widget pegamos lo siguiente:

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
