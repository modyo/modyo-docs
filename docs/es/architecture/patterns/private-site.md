---
search: true
---

# Sitio Privado

:::warning Contenido en Progreso
La siguiente página se encuentra en proceso de mejora. Los contenidos podrían estar incompletos o desactualziados.
:::

La implementación de sitios privados, también conocidos como aplicaciones Web, sobre Modyo es uno de los casos de uso más avanzados que se puede realizar sobre la plataforma. En un sitio privado generalmente existirá autenticación de usuarios delegada hacia un repositorio externo, uso de APIs, desarrollo de micro frontends, mensajería con los usuarios, segmentación de contenidos, páginas restringidas según perfil, etc.

Generalmente los sitios privados se utilizan para implementar funcionalidad transaccional sobre la plataforma, en dónde las APIs de integración serán las encargadas de entregar la información y procesar los datos invocados desde micro frontends que reflejan la funcionalidad de negocio que se desee representar.

La cantidad de funcionalidad a implementar dentro de una aplicación, dependerá del problema de negocio a resolver, es por ello que resulta especialmente relevante utilizar técnicas como el [Domain Driven Design (DDD)](/es/architecture/patterns/ddd) para poder determinar la mejor estructura y separación de módulos de alto nivel cómo páginas y micro frontends.

<!-- Hack to avoid this title to be displayed in the TOC element -->
<h3><a href="#¿como-implementar-sitios-privados-con-modyo" class="header-anchor">#</a> ¿Cómo implementar sitios privados con Modyo?</h3> 

A continuación se presentan las diferentes características de Modyo que son importantes de entender a la hora de implementar iniciativas de sitios privados.

[[toc]]


### Estructura



#### Navegación privada

#### Uso de Stages
En el caso del desarrollo de sitios transaccionales con Micro Frontends en Modyo, la recomendación del uso de stages se podrá abordar de la siguiente manera:

Desarrollo con ambientes virtuales
Se usan stages para representar los diferentes ambientes
Los MFEs se sincronizan entre un ambiente y otro
Desarrollo con ambientes físicos
Se usan ambientes físicos
Los MFEs no se sincronizan entre un ambiente y otro, por lo que se deben desplegar de forma separada por cada ambiente

Dónde se comitea



### Gobernabilidad de contenido y códigos fuente

#### Uso de ambientes previos

### Progressive Web Application (PWA)


### Personalización