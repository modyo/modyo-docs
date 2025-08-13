---
search: true
---

# Notas del release

## 10.1


### 10.1.1 - 23 de julio de 2025

<Badge text="Customers" type="customers" vertical="middle"/>

* Mejora visual de la edición de flujos condicionales
* Corrige problema de scroll en el builder de las originaciones

<Badge text="Channels" type="channels" vertical="middle"/>

* Agrega edición de vistas de inicio, resumen y de completado en la página de una originación
* Mejora en la evaluación de condiciones durante el completado de una submission
* Corrige valor entregado por field de tipo checkbox que ahora entrega un arreglo con los valores seleccionados


### 10.1.0 - 3 de julio de 2025

<Badge text="Core" type="core" vertical="middle"/>

* Agrega opción de creación de roles personalizables
* Mejoras en seguridad, performance y dependencias

<Badge text="Channels" type="channels" vertical="middle"/>

* Check de draft/publicado de páginas en el preview ahora es persistente en la navegación

<Badge text="Customers" type="customers" vertical="middle"/>

* Agrega nuevo módulo de originación activable mediante el plan con las siguientes características:
  * Flujos condicionales
  * Versionamiento
  * Formularios
  * Snippets de código 
  * Validaciones
  * Vista de agentes
  * Invitaciones a flujos
  * Personalización de los flujos
  * Api de originación
  * Drops liquid para acceso desde vistas de los sitios
* Webhooks para eventos de usuarios (Breaking change, este cambio requiere revisión previa a la subida de versión)
* Agrega session expiration policy a nivel de reino
* Agrega la opción de poder customizar el input de username para el login
* Agrega nuevos tipos de campos para los formularios
* Agrega datasets a nivel de reino que se pueden usar en formularios y originaciones
* Transforma los eventos de usuarios (Breaking change, este cambio requiere revisión previa a la subida de versión)
* Unifica los identity providers con las integraciones en un solo módulo llamado integraciones

