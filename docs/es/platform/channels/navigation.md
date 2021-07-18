---
search: true
---

# Navigation

La navegación es la forma más rápida de armar un listado de elementos para entregarle a tus usuarios un fácil acceso a los puntos clave de tu sitio. 

![Navigation builder](/assets/img/platform/navigation-builder.png)

En esta sección encuentras un listado anidado de elementos, que corresponden a los elementos que aparecerán en el sitio al usar el tag <span v-pre>`{% menu %}`</span> en la [sección template builder](/es/platform/channels/templates.html).

El menú builder solo permite dos niveles de profundidad, por lo que puedes tener un listado principal, y sub elementos en cada uno de los ítems principales. No puedes anidar otros elementos dentro de los elementos anidados. 

En la parte superior de la vista, encontrarás el estado de publicación del menú:

- **Publicado**: Este estado aparece luego de haber hecho una publicación y cuando las versiones editable y publicada son iguales.
- **Cambios pendientes**: Este estado aparece si es que ya hay una versión publicada, pero hay cambios pendientes de publicar en tu versión editable.
- **En revisión**: Este estado aparece cuando esté habilitada la [Revisión en Equipo](/es/platform/core/key-concepts.html) y se haya enviado a revisión la versión editable.
- **Aprobado**: Este estado aparece cuando esté habilitada la [Revisión en Equipo](/es/platform/core/key-concepts.html) y si es que se cumplieron las condiciones de revisión del elemento. Si se encuentra en este estado, tus templates ya pueden ser publicados.

En la parte superior derecha, encuentras la última fecha de publicación y las acciones disponibles:

**Vista previa** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Al hacer click en este ícono se abre una nueva pestaña con el modo vista previa del menú, en el cual puedes ver como si estuvieran publicados, todos los cambios que tienes en tu menú.

:::warning Atención
Puedes previsualizar los cambios como usuario sin sesión o usuario con sesión de Modyo. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

**Diferencias** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Al hacer click en este ícono, irás a la [vista de diferencias](/es/platform/channels/sites.html#revision-y-publicacion-conjunta), en la cual puedes comparar los cambios que hay entre múltiples versiones de tu menú.

Por defecto, inicias comparando la versión publicada con la versión editable, pero al hacer uso de los selectores de versiones, comparas con las versiones de respaldo.

:::tip Tip
Cada vez que publicas una versión, la versión que estaba publicada pasa a ser una versión de respaldo. 

Por defecto, se guardan hasta 20 respaldos, de tal forma que los veinte respaldos más recientes se pueden comparar, restaurar y hacer rollback. 

Para más información sobre el versionamiento, revisa la sección de [Versionado](/es/platform/core/key-concepts.html#versionado).
:::

**Actividad/Comentarios** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Si es que tienes la [revisión en equipo](/es/platform/core/key-concepts.html) habilitada, ves esta opción que al hacerle click, despliega una barra lateral con el historial de actividad y comentarios del menú. 

Al final de la barra lateral, ves una caja de texto donde puedes escribir un comentario. Junto a cada actividad, puedes hacer click en "ver detalle" para mostrar la información completa de ese registro de actividad.

**Acción principal**

- **Guardar**: Guarda todos los cambios del menú.
- **Enviar a revisión**: Cambia el estado del menú a "Esperando revisión". En este estado sigues haciendo cambios, pero cada cambio será notificado vía correo a los revisores asignados.
- **Rechazar**: Vuelve al estado "En edición", notificando a los revisores que el elemento fue rechazado.
- **Publicar**: Una vez que el menú fue aprobado, podrás ir a la vista de [publicación conjunta](/es/platform/channels/sites.html#revision-y-publicacion-conjunta) para publicar tu navegación.

En la sección lateral derecha puedes ver una barra que cambia de acuerdo al ítem seleccionado en el área principal. En esta sección puedes ver las opciones:

- **Nombre**: Nombre del elemento que aparecerá en el sitio.
- **Page asociado**: Se puede asociar directamente a una página o a una URL personalizada.
- **URL**: Si escogiste una URL personalizada en el elemento anterior, acá puedes escribir la URL a la que quieres que apunte este ítem del menú.
- **Abrir en pestaña nueva**: Le añade el atributo `target='blank'` al elemento HTML del item del menú, para que al hacerle click, se abra en una pestaña nueva.
- **Privado**: Hace que el elemento seleccionado aparezca visible solo cuando hay una sesión de usuario activa en el sitio.
- **Segmentos**: Si la opción anterior se habilita,también puedes segmentar este elemento, para que además de tener una sesión, los usuarios que se encuentran dentro de los segmentos seleccionados, ya pueden ver este ítem de menú.
