---
search: true
---

# Temas

Los componentes de Dynamic Framework han sido creados con un sistema de tokens y variables que permiten ajustar todos los aspectos relevantes de su look and feel. Para personalizar un diseño, se puede hacer de dos formas como veremos a continuación.

### Variables en el Micro Frontend

Las variables en el micro frontend son una forma conveniente de definir la personalización dentro de cada plantilla, permitiendo con esto no depender de una estructura central de configuración. Las variables dentro de la plantilla se definen en un archivo de variables presente en cada una de ellas y sus valores sólo afectarán a ese micro frontend, no teniendo efecto en el resto de los componentes que se despliegan como parte de la aplicación Web.


### Variables de la Aplicación Web

Las variables de la aplicación Web se modifican en Modyo y permiten configura todos los aspectos personalizables presentes en el framework de una manera centralizada. Las variables se definen dentro de la plataforma y se traspasan al sistema de diseño mediante el uso de una plantilla de Liquid.

Una ventaja de utilizar este método, es que al estar centralizado, será más fácil controlar y mantener de forma consistente las personalizaciones aplicadas, además de poder reutilizar las mismas definiciones más allá del micro frontend, en la aplicación Web en sí.