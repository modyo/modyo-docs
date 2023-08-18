---
search: true
---

# Sitio Privado
Por sitio privado nos referimos a los sitios que requieren autenticación del usuario y que, a diferencia de los [sitios públicos](/es/architecture/patterns/public-site), actúan como una verdadera aplicación Web. Un sitio privado debe ofrecer funcionalidad relevante al usuario y mantener registro de lo que éste hace en él, de forma que el ingreso mediante credenciales o una eventual instalación en el dispositivo con [PWA](/es/architecture/patterns/pwa) tenga sentido para él.

Algunos ejemplos comunes de sitios privados podrían ser:
- Aplicación de banca digital
- Plataformas financieras
- Billetera digital
- Onboarding digital
- Comercio electrónico
- Plataformas de salud en línea
- Sistemas de reservas y citas
- Intranets corporativas

:::tip Sitios híbridos
Los sitios privados tradicionalmente se encuentran separados de los públicos, en sistemas diferentes que incluso muchas veces no comparten nada en común. Sin embargo existen casos en que es más adecuado implementar una combinación de los dos, con los llamados [sitios híbridos](/es/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#¿como-implementar-sitios-privados-con-modyo" class="header-anchor">#</a> ¿Cómo implementar sitios privados con Modyo?</h3>

La implementación de sitios privados sobre Modyo, es uno de los casos de uso más completos que se pueden trabajar sobre la plataforma, la que incluye de la caja herramientas para resolver tareas comunes cómo la autenticación de usuarios mediante credenciales internas o delegadas a sistemas de identidad externos, consumo de APIs con información del usuario desde sistemas externos, componentes avanzados de Javascript, [micro frontends](/es/architecture/patterns/micro-frontend),  [microservicios](/es/architecture/patterns/microservice), mensajería, notificaciones, segmentación de páginas y contenidos según el perfil, entre muchos otros.

A continuación se presentan las diferentes características de Modyo que son importantes de entender a la hora de implementar iniciativas de sitios privados.

[[toc]]

:::tip Similitudes con los Sitios Públicos
En el trabajo con sitios privados, podemos encontrar similitudes que se comparten con los [sitios públicos](/es/architecture/patterns/public-site). El objetivo de esta guía no es repetirlos todos, sino más bien complementarlos en los casos en que la implementación sea diferente.
:::


### Gestión de Usuarios

#### Eventos de usuario

#### Formularios

#### Mensajería y notificaciones

#### Uso de segmentación de páginas y contenido

### Estructura y Modularidad
#### Micro frontends y Microservicios
La cantidad de funcionalidad a implementar dentro de una aplicación, dependerá del problema de negocio a resolver, es por ello que resulta especialmente relevante utilizar técnicas como el [Domain Driven Design (DDD)](/es/architecture/patterns/ddd) para poder determinar la mejor estructura y separación de módulos de alto nivel cómo páginas y micro frontends.

#### Uso de Frameworks de Javascript

#### Uso de Web Components



### Gobernabilidad de contenido y códigos fuente
	
#### Uso de ambientes previos
Los MFEs se sincronizan entre un ambiente y otro
Desarrollo con ambientes físicos
Se usan ambientes físicos
Los MFEs no se sincronizan entre un ambiente y otro, por lo que se deben desplegar de forma separada por cada ambiente


#### Uso de Stages
En el caso del desarrollo de sitios transaccionales con Micro Frontends en Modyo, la recomendación del uso de stages se podrá abordar de la siguiente manera:

Desarrollo con ambientes virtuales
Se usan stages para representar los diferentes ambientes

#### Uso de Sistemas de Diseño


### Progressive Web Application (PWA)

