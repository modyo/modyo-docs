---
search: true
---

# Pages

Pages (or pages) are what allows you to create a structure for your site, where you can add unstructured content and customize the paths where that content is displayed.

![Page Index](/assets/img/platform/page-index.png file)

You can add new pages by _clicking_ on the **+ New** button at the top right of the view. You must choose a name, path and if the new page will have a parent.

Para editar una página, debes hacer _click_ en el ícono de edición (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>) o en el nombre de la página para ir a la vista de edición.

In the Edit view, you find a top bar with actions, a center grid, and a tabbed sidebar.

In the top bar, you can find different actions and information:

**Title**: It is located at the top left, and indicate the name of the page you are modifying. On the right the name, you will find the current status of the page. Those can be “Draft”, “Under Review”, “Approved”, “Pending Changes”, “Published”. To learn more about these states, you can check out the section of [Versioning and Team Review](/es/platform/core/key-concepts.html).

**Date of publication**: If the page has been published, the date of the last publication will be indicated.

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: This icon allows you to open a new tab with Preview mode so you can view the changes that have been made in the page without having to publish it.

:::warning Attention You can preview the pages as a user without session or user with Modyo session. To do this, it is advisable to log out or log out of Modyo from the site before entering preview mode, since if you log out in preview mode you might encounter security errors like _x-fame-options_ or _mixed-content_, depending on the configuration of custom domains and SSL site :::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: By clicking _click_ on the differences icon, you will go to the [differences view](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) of the page that allows you to select two versions to compare, allowing you to execute actions [reset and rollback](/es/platform/core/key-concepts.html#acciones-para-el-versionado)

:::tip Tip Si tu página está en estado "Borrador" no aparece el icono de diferencias, dado que no hay nada con que comparar la versión editable actual. Para aprender más sobre las diferencias y respaldos, revisa la sección de [versionado](/es/platform/core/key-concepts.html#versionado) :::

**Activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Clicking __ on this icon displays a sidebar which shows you the activity associated with the page, such as modifications, posts, and comments. At the bottom of this bar, you can type associated comments. In case the page is under review, everyone who is assigned as reviewers will receive a notification with the comment.

**Other actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- Archive <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5m8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: If a page is not published, this action allows you to archive it. Cuando una página se encuentra archivada, por defecto no aparece en el índice de página y permite mantener la estructura del sitio limpia.
- Duplicar <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 16V4H8v12h12m2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Esta acción te permite copiar la versión editable de la página en la que estás. La versión copiada queda en estado "Borrador".

:::warning Atención Una vez terminada la acción de copiado, te dirige a la nueva página, por lo que recuerda guardar todos los cambios antes de usar esta acción, de lo contrario podrías perder información importante. :::

**Acción principal**: Es el botón verde en la parte superior derecha. This button can take different forms:

- Guardar: Te permite guardar los cambios que has hecho en la página.
- Enviar a revisión: Si está habilitada la revisión en equipo, entonces si no hay cambios que guardar, esta acción te permitirá enviar a revisión la página y asignar revisores.
- Publicar: Si la página está aprobada, puedes ir a la [vista de publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) haciendo uso de esta acción.

:::tip Tip
* Si una página tiene un padre, solo la puedes publicar si es que éste se encuentra publicado.
* Si una pagina tiene hijos, solo puedes despublicarla si todos estos se encuentran despublicados.
* Si una página tiene hijos, solo puedes archivarla si todos estos se encuentran archivados. :::

**Acciones secundarias**:
- Forzar publicación: Si es que eres administrador del sitio, entonces puedes ver y usar esta opción que te permite publicar la página en cualquier momento, incluso saltándote la revisión en equipo.
- Despublicar: Si es que la página está publicada, entonces ves esta acción que te permite despublicar la página.

![Page builder](/assets/img/platform/page-builder.png)

La grilla central es el lugar donde puedes posicionar tus widgets. Puedes mover los widgets de un lado a otro haciendo uso de la funcionalidad _drag-and-drop_ arrastrándolos desde el ícono <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 19v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4V9h2v2H7m4 0V9h2v2h-2m4 0V9h2v2h-2M7 7V5h2v2H7m4 0V5h2v2h-2m4 0V5h2v2h-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>.

En la sección lateral derecha encontrarás tres pestañas:

- Añadir widgets: Te permite seleccionar dentro de un listado de widgets para añadirlos a la grilla.
- Editar widget: Te permite cambiar distintas propiedades y filtros para cada uno de los widgets.
- Propiedades: Te permite modificar el nombre, excerpt, ruta, padre, privacidad, grilla de la página y meta tags.

### Widgets

You can add them from the first tab of the Page builder. Available widgets are:

- **HTML**: Allows you to enter HTML and CSS code without validations. It will not allow you to enter Javascript code.
- **Rich Text**: Allows you to use a rich text editor, where you can format text and switch between code view and rich text. :::warning Attention The rich text widget has an automatic formatter, so the code you type in the code view may be affected. :::
- **Content**: These are default widgets that allow you to display content listings using filters by space, type, language, tags and category. To modify how these widgets look, you must do so in the [Template Builder](/es/platform/channels/templates. html), in the Widgets section.
- **Custom**: You will find a list of all the widgets you created and published in the widget builder.

Once you have selected a widget in the middle section, the focus will go to the central tab, where you can find different widget configuration options and if you select a custom widget, you will find a link to go directly to its edit view in the [widget builder](/es/platform/channels/widgets. html) and the list of variables that the widget is using. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

### Properties

In this tab you will find options common properties for all pages:

* Name
* Father
* Path
* Extract
* Grid
* Privacy
* Meta tags

:::warning Attention Modyo has reserved paths for the pages, so you won't be able to use them as paths to your custom pages:
<table style="border: none;"><tr style="border: none;">
<td style="border: none;"><ul>
<li>404</li>
<li>422</li>
<li>500</li>
<li>admin</li>
<li>auth</li>
</ul></td>
<td style="border: none;"><ul>
<li>crossdomain</li>
<li>dist</li>
<li>forms</li>
<li>avascript</li>
<li>login</li>
</ul></td>
<td style="border: none;"><ul>
<li>logout</li>
<li>manifest</li>
<li>ping</li>
<li>preview</li>
<li>profile</li>
</ul></td>
<td style="border: none;"><ul>
<li>robots</li>
<li>search</li>
<li>serviceworker</li>
<li>session</li>
<li>site_logout</li>
</ul></td>
<td style="border: none; vertical-align: top;"><ul>
<li>sitemap</li>
<li>stylesheets</li>
<li>uploads</li>
<li>widget_manager</li>
</ul></td>
</tr></table>
:::

#### Route Delegation

Enables route delegation to allow absolute control of page sub-paths through the JavaScript router.

#### Privacy

If you enable privacy on a page, then a session will be required to view this page. Next to privacy, you can also associate [Targets](/es/platform/customers/targets.html), so that only users who belong to those targets will be able to access this page. Those who are not part of the selected target group will be redirected to the previous page or to the home of the site.

#### Meta tags

In this section you can add meta tags to the pages and modify the value of existing meta tags, to enrich the SEO of the page. With the tags added to the pages, you can decide whether to use the default value, overwrite the available value for the tag, or remove the tag from the page.

:::tip Tip You must keep in mind that for meta tags to take effect on your page, you must publish the changes. :::

To access the meta tag list of the page, you must use the Liquid drop <span v-pre>`{{ page.meta_tags }}`</span>. We recommend that you see the example in the SEO section of the [Template builder](/es/platform/channels/templates.html#seo).

:::tip Tip If you want to add a common meta tag for all pages in a single action, go to the site configuration [, SEO section](/es/platform/channels/sites.html#seo). :::
