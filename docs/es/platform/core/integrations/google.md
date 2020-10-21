---
search: true
---

### Google

Para poder integrar el inicio de sesión de Google con Modyo, deberás contar con:

- ID de aplicación
- Clave

Estos valores los podrás obtener luego de crear una aplicación en Google con permisos para inicio de sesión. Puedes aprender más sobre como crear y configurar una aplicación de Google en su [Documentación oficial](https://developers.google.com/identity/sign-in/web/sign-in).

Debes tener en cuenta que al final del formulario se encuentra disponible la URL de callback (_Callback  URI_). Es necesario usar esa URL en la aplicación o proyecto que crees en Google para poder completar el flujo de inicio de sesión correctamente.

Además de los valores necesarios, puedes configurar algunos datos extra para controlar el comportamiento del inicio de sesión con Google. Si habilitas la opción _Restringir dominios_, podrás usar dos campos extra:

- **Ejemplo de dominio**: Serán los dominios que se muestren como sugerencia al momento de estar iniciando sesión en Google.
- **Dominios admitidos**: Si el dominio del correo que el usuario ingresó al momento de iniciar sesión en Google no está dentro de este listado, entonces el inicio de sesión no será válido y el usuario será redirigido a la vista de inicio de sesión de Modyo sin una sesión activa.
