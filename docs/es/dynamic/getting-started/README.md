---
search: true
---

# Guías

Esta sección te guiará paso a paso para comenzar con Dynamic Framework, desde la instalación hasta tu primera aplicación funcional.

## Contenido de la Sección

### [Instalación](installation.html)
Todos los métodos disponibles para instalar Dynamic Framework:
- Instalación con Modyo CLI
- Integración en Modyo Platform
- Instalación vía CDN
- Instalación vía NPM

### [Primera Aplicación](first-app.html)
Tutorial paso a paso para crear tu primera aplicación bancaria:
- Configuración inicial
- Componentes básicos
- Conexión con APIs
- Despliegue

### [Estructura del Proyecto](project-structure.html)
Comprende la organización de un proyecto Dynamic:
- Estructura de carpetas
- Archivos de configuración
- Mejores prácticas
- Convenciones

### [Migrar a v2.0](migration-v2.html)
Guía paso a paso para actualizar desde Dynamic UI 1.36.x:
- Nuevos requisitos y dependencias
- Migración de iconos Bootstrap a Lucide
- Cambios de API y componentes eliminados
- Checklist de migración

### [Checklist de Producción](production-checklist.html)
Checklist completo antes de desplegar a producción:
- Optimización de rendimiento
- Mejores prácticas de seguridad
- Cumplimiento de accesibilidad (WCAG 2.1 AA)
- Manejo de errores y monitoreo

## Prerrequisitos

Antes de comenzar, asegúrate de tener:

- **Node.js** >=22.0.0
- **NPM** 10.x o superior
- **Git** para control de versiones
- **Cuenta Modyo** con acceso a Dynamic Framework

## Inicio Rápido en 3 Minutos

Si ya cumples con los prerrequisitos, puedes comenzar inmediatamente:

```bash
# 1. Crear proyecto con plantilla Dynamic
npx @modyo/cli@latest get dynamic-react-vite-base-template mi-banco

# 2. Instalar dependencias
cd mi-banco && npm install

# 3. Iniciar servidor de desarrollo
npm start
```

Tu aplicación estará disponible en `http://localhost:8080` 🎉

## Rutas de Aprendizaje

### Para Desarrolladores Nuevos en Dynamic

1. Lee sobre [¿Qué es Dynamic?](../overview.html)
2. Sigue la guía de [Instalación](installation.html)
3. Completa el tutorial de [Primera Aplicación](first-app.html)
4. Explora los [Componentes](../development/components.html)

### Para Desarrolladores con Experiencia

1. Revisa la [Estructura del Proyecto](project-structure.html)
2. Aprende sobre [Personalización](../customization/)
3. Implementa [Integraciones con APIs](../development/api-integration.html)

## Recursos de Apoyo

- **Documentación completa**: [dynamic.modyo.com/docs](https://dynamic.modyo.com/docs)
- **Videos tutoriales**: [YouTube Modyo](https://youtube.com/modyo)
- **Ejemplos de código**: [GitHub](https://github.com/modyo/dynamic-examples)
- **Comunidad**: [community.modyo.com](https://community.modyo.com)

## ¿Necesitas Ayuda?

Si encuentras problemas durante el inicio:

1. Revisa los [FAQs comunes](https://support.modyo.com/hc/es/sections/360003665292)
2. Busca en la [comunidad](https://community.modyo.com)
3. Contacta [soporte técnico](https://support.modyo.com)

## Siguiente Paso

**[→ Continuar con Instalación](installation.html)**