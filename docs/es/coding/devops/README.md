---
search: false
---

# Estándar de Desarrollo

## Propósito
El propósito principal del estándar de desarrollo es asegurar que todo el código ha sido diseñado, escrito y desplegado siguiendo convenciones transversales que faciliten la colaboración entre los desarrolladores, permitiéndoles interactuar en diferentes proyectos sin tener que descifrar estilos y prácticas particulares en cada ocasión. 

El estándar se trata de uniformidad y consistencia, no acerca de qué práctica es mejor que otra. El estándar debe servir como una guía de apoyo para los proceso de revisión conjunta de código. El estándar además debe ser claro y evitar las confusiones, la idea no es dejar las reglas a la libre interpretación de cada uno, sino que por el contrario, la idea es estar alineados en prácticas comunes. 

### ¿El estándar sólo aplica al trabajo con Ruby o Java?
¡Para nada! El estándar aplica a todo el código que producimos, ya sea backend, frontend, producto, servicio, middleware, automatizaciones, firmware, etc (no, aún no hacemos firmware, pero aplicaría igual). Todo el software que producimos como equipo debe respetar estas guías.

A lo largo de este estándar, encontrarás reglas generales y otras particulares, dependiendo de cómo se apliquen y donde se justifique hacer una diferenciación.

### ¿Cómo puedo contribuir?
El estándar se revisa periódicamente. Ajustes y cambios son siempre bienvenidos, y cuando se realizan, se busca que se adopten rápida y transversalmente. Es por ello que estos cambios deben aplicarse metódicamente, en periodos específicos que garanticen el foco de atención y la apropiada participación de todas las partes interesadas.

La idea es fomentar el sano debate, buscar el consenso y aprender de la experiencia de los desarrolladores más experimentados, con el fin de proponer mejoras justificables que agreguen valor a los diferentes equipos de trabajo. Quedan fuera de la discusión las peleas dogmáticas tipo “Tangananica, Tangananá”.

## Principios Generales
- Las mejores arquitecturas son las que permiten el cambio. Es mejor un mal software con una buena arquitectura que un buen software con una deficiente. ¿Por qué? Porque las buenas arquitecturas siempre se pueden arreglar. (Uncle Bob, Clean Architecture)
- Evitar duplicar funcionalidad que ya esté disponible en una librería
- Un buen copy & paste a veces es mejor que una mala refactorización
- KISS: “Keep It Stupid Simple” (o “Keep It Simple, Stupid!”). Evitamos hacer sobre-ingeniería en donde no hace falta. Pragmatismo.
- Sé humilde, no te sientas un prodigio del código
- Divide tus tareas grandes en tareas más pequeñas
- Mantén tus métodos y clases pequeños, y con una sola responsabilidad. Si tienes muchas condiciones en un método, divídelo en métodos más pequeños. No sólo esto hará que el código sea más fácil de leer, si no que además más fácil de debuguear
- Primero resuelve el problema, luego lo codificas y no alrevés
- No tengas miedo a borrar tu código. Refactorizar y recodificar son dos cosas muy importantes


### No permitir que las fallas sean silenciosas
No escribas código que adivine el futuro. Evita el “por si acaso en el futuro alguien pide…”
Evita el acoplamiento de códigos entre módulos diferentes. Evita el “cross importing”
Las cosas inestables dependen de las cosas estables. ¡No alrevés! Si dependemos de algo inestable (librería “commons” en desarrollo) todo el proyecto se volverá inestable
Por más detallado que se realice un estándar, siempre te verás implementando cosas complejas que no se cubren aquí. Aprende patrones y arquetipos de diseño, la mayoría de los problemas alguien en el pasado los resolvió. Aprende a combinar patrones específicos con los globales usados de forma transversal
Referencias indispensables:


### Clean Code
### Clean Architecture
### The Pragmatic Programmer

### Java, JavaScript, VueJS, ReactJS, Ruby, NodeJS*

### Estilo de Codificación

### Estructura de Directorios / Proyecto

Convenciones de Nombres
Cómo se nombran las variables, métodos, clases e interfaces. Cual notación se usará.

### Indentación
Cómo el código será tabulado. Ejemplo: Uso de tabs o 4 espacios.

### Layout de Código
Estilo de uso para los brackets y saltos de líneas.
Ubicación de modelos, controladores, interfaces, documentación, testing, etc.
Tamaño de métodos, tamaño de clases.

### Manejo de Excepciones
Declarar donde se esperan códigos de errores o excepciones y el por qué.

### Manejo de Logs
Declarar que debe ir y que no, debe estar correlacionado con la forma como logs se agregan y se inspeccionan.

### Comentarios
Qué se documenta, en qué lugares, al inicio o inline, con qué notación.

### Exposición
Con qué nivel de exposición se trabajan los métodos. Siempre deberían tener el menor grado de exposición posible, etc. Métodos internos declarados privados.


### Repositorio de Código
Estructura de ramas

### Reglas para la mezcla de código

### Test Coverage Enforcement


## Arquitectura
### Frameworks
Versiones aceptadas del framework, plantillas

### Web & APIs
Usar sólo UTF8
Usar sólo HTTPS en producción
Usar HTTP2. Aprender que implica.

Spring Boot


NodeJS


Javascript / VueJS
Evitar las latencias originadas por el Javascript bloqueante

HTML

CSS

Liquid


Build


Testing
No haggis testing a métodos privados
Usa aserciones intermediarias a lo largo del test. Esto permitirá identificar los puntos de falla más rápido.
Realiza tests unitarios y de integración
Asegura revisar las mediciones de cobertura, deben ser siempre mayores al 90%.

Persistencia
Objetual

Relacional

Trabajo con Archivos
Si lo abres, lo cierras. Si no lo cierras, asegura que alguien lo haga por tí.



Integración
SOAP

Rest

Base de Datos Externas


Configuración
Cuando se usan los property files, por defecto, por ambiente. Las variables de entorno o los inicializadores por línea de comando, etc.
Orientación a Objetos
Evitar variables globales y largas listas de parámetros
Limitar las dependencias de un objeto (entidades de las que un objeto depende)
Preferir la composición en lugar de la herencia
Clases pequeñas con un propósito único y bien definido
Dilo, no lo preguntes. https://thoughtbot.com/blog/tell-dont-ask 
Seguridad
Gestión de secretos

Gestión de variables de entorno



Despliegue
Dockerfile

Parametría de la máquina virtual

Integración Contínua

Repositorios de Artefactos

Observabilidad
Implementación de métricas



