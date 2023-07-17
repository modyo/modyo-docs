---
search: true
---

# Backend for Frontend

El patrón de arquitectura "Backend for Frontend" (BFF) es un enfoque arquitectónico que se utiliza para optimizar y
adaptar el backend de una aplicación a las necesidades específicas de sus clientes o interfaces de usuario (UI)
front-end.

En una arquitectura tradicional, el backend de una aplicación suele ser responsable de manejar múltiples tipos de
clientes o interfaces de usuario, como aplicaciones móviles, aplicaciones web, servicios API, entre otros. Esto puede
generar complicaciones, ya que diferentes clientes pueden tener diferentes requerimientos, necesidades de datos,
capacidades y flujos de trabajo.

El patrón BFF aborda esta problemática al introducir una capa adicional de backend específica para cada tipo de cliente
o interfaz de usuario. En lugar de tener un backend único para todos los clientes, se crean diferentes BFFs que actúan
como intermediarios entre el frontend y los servicios principales del backend.
Cada BFF se encarga de orquestar y gestionar las solicitudes y respuestas específicas del cliente correspondiente. Esto
permite adaptar el backend a las necesidades particulares de cada interfaz de usuario, proporcionando una experiencia
óptima y eficiente.
Beneficios del patrón Backend for Frontend:

- **Adaptabilidad:** Permite adaptar la lógica y las capacidades del backend a cada cliente o interfaz de usuario,
  optimizando así la experiencia del usuario.
- **Independencia del frontend:** Permite a los equipos de frontend y backend trabajar de forma más independiente, ya que
  pueden evolucionar y realizar cambios en su lógica sin afectar a los otros componentes.
- **Mejora del rendimiento:** Al tener un backend específico para cada interfaz de usuario, se pueden optimizar las
  consultas y respuestas de datos para satisfacer las necesidades particulares de cada cliente, mejorando así el
  rendimiento general de la aplicación.
- **Facilita la evolución:** Al separar las responsabilidades entre el backend y los BFFs, se simplifica la evolución y
  mantenimiento de la aplicación, ya que los cambios en una interfaz de usuario específica se pueden realizar sin
  afectar a otras partes del sistema.

El patrón BFF se utiliza ampliamente en el desarrollo de aplicaciones web y móviles, ya que permite una clara separación
entre las capas de frontend y backend. Su objetivo es abstraer la capa de backend en una interfaz especializada para
cada tipo de frontend específico. Siguiendo el principio de responsabilidad única, el backend generado se encarga de
manejar las solicitudes y proporcionar respuestas específicas para cada frontend, lo que permite una mayor
especialización y adaptación a las necesidades de visualización.

:::tip BFF y Modyo
Dentro de Modyo, el patrón BFF se implementa de dos formas: mediante el uso de APIs desplegadas dentro de Modyo Connect,
o mediante APIs provistas por el mismo cliente.
:::
