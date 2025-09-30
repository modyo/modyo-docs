---
search: true
---

# Repositorio de Artefactos

Los repositorios de artefactos son una forma segura y accesible de almacenar paquetes de software. Permiten versionar y respaldar los paquetes, y actuar como fuente única para su distribución.

En el caso de librerías intermediarias, utilizadas en la modularización de código Java y Javascript, las dependencias se consumen directamente desde el repositorio de artefactos.

Modyo implementa repositorios de artefactos en su GitHub Enterprise y en la cuenta de Amazon AWS del cliente. Para repositorios intermediarios (ej. librerías Java o Javascript) se usa GitHub Registry. Para repositorios de contenedores desplegados en la nube de Amazon, se usa AWS Elastic Container Registry.


## Pasos de Activación
Crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre del repositorio de artefactos.
- Tipo de repositorio de artefacto: librería NPM o Maven.
- Propósito del repositorio de artefacto.