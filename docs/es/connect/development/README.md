---
search: true
---

# Desarrollo

Los componentes de desarrollo incluyen las herramientas y accesos necesarios para que un equipo de desarrolladores colabore de forma segura en iniciativas de [micro frontends](/es/architecture/patterns/micro-frontend.html) y [microservicios](/es/architecture/patterns/microservice.html).

Esta sección documenta los componentes esenciales del entorno de desarrollo de Modyo Connect, que facilitan la colaboración, automatización y gestión segura del código fuente para proyectos empresariales.

## Componentes Disponibles

#### [Acceso de Desarrollador](developer-access.html)
Punto de entrada para usar los servicios de Modyo Connect. Proporciona permisos para acceder a repositorios, sistemas en la nube, métricas, monitoreo y bitácoras.

#### [Repositorio de Código](code-repository.html)
Gestión completa del ciclo de vida del código fuente implementada sobre GitHub Enterprise. Incluye inspecciones de seguridad y análisis de calidad con SonarCloud.

#### [Integración Continua](continuous-integration.html)
Automatización de procesos del ciclo de desarrollo mediante GitHub Actions y AWS CodePipeline. Abarca desde la inspección de código hasta el despliegue automatizado.

#### [Repositorio de Artefactos](artifact-repository.html)
Almacenamiento seguro y versionado de paquetes de software. Soporta librerías NPM, Maven y contenedores Docker mediante GitHub Registry y AWS ECR.

## Inicio Rápido

1. Solicita el [acceso de desarrollador](developer-access.html) mediante un ticket en el Centro de Soporte
2. Configura tu [repositorio de código](code-repository.html) según el tipo de proyecto
3. Establece los pipelines de [integración continua](continuous-integration.html)
4. Configura los [repositorios de artefactos](artifact-repository.html) necesarios

## Recursos Adicionales

- [Centro de Soporte de Modyo](https://support.modyo.com)
- [Guía de micro frontends](/es/architecture/patterns/micro-frontend.html)
- [Guía de microservicios](/es/architecture/patterns/microservice.html)