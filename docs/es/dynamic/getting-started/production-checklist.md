---
search: true
---

# Checklist de Producción

Antes de desplegar tu aplicación Dynamic Framework a producción, usa este checklist para asegurar que tu aplicación cumple los estándares de rendimiento, seguridad, accesibilidad y confiabilidad.

## Rendimiento

### Optimización del Bundle

- [ ] **Named imports**: Usa imports explícitos para mejor mantenibilidad
  ```tsx
  // Recomendado - explícito, mejor para linting y soporte de IDE
  import { DButton, DCard } from '@dynamic-framework/ui-react';

  // Funciona pero menos explícito
  import * as Dynamic from '@dynamic-framework/ui-react';
  ```

- [ ] **Code splitting implementado**: Usa React.lazy para división por rutas
  ```tsx
  const Dashboard = React.lazy(() => import('./views/Dashboard'));
  const Transfers = React.lazy(() => import('./views/Transfers'));
  ```

- [ ] **Tamaño del bundle analizado**: Ejecuta el analizador de bundle y resuelve dependencias grandes
  ```bash
  npm run build -- --analyze
  ```

- [ ] **Imágenes optimizadas**: Usa formato WebP, tamaños apropiados y lazy loading
  ```tsx
  <img src="image.webp" loading="lazy" alt="Descripción" />
  ```

### Rendimiento en Runtime

- [ ] **React.memo usado** para componentes costosos que reciben props estables
- [ ] **useMemo/useCallback** aplicado donde los cálculos o callbacks son costosos
- [ ] **Virtualización** implementada para listas largas (usa react-window o similar)
- [ ] **Debouncing** aplicado a inputs de búsqueda y llamadas frecuentes a API

### Estrategia de Caché

- [ ] **TanStack Query** configurado con staleTime y gcTime apropiados
  ```tsx
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutos
        gcTime: 30 * 60 * 1000, // 30 minutos
      },
    },
  });
  ```

- [ ] **Assets estáticos** tienen headers de caché configurados
- [ ] **Service worker** considerado para capacidad offline (si aplica)

## Seguridad

### Autenticación y Autorización

- [ ] **Tokens de acceso** almacenados de forma segura (no en localStorage para apps sensibles)
- [ ] **Refresh de token** implementado antes de la expiración
- [ ] **Timeout de sesión** configurado apropiadamente (típicamente 15 minutos para banca)
- [ ] **Guards de ruta** protegen rutas autenticadas

### Protección de Datos

- [ ] **Solo HTTPS**: Sin contenido mixto, todos los recursos sobre TLS
- [ ] **Datos sensibles** nunca logueados a consola en producción
  ```tsx
  if (import.meta.env.DEV) {
    console.log('Info de debug:', data);
  }
  ```

- [ ] **Sanitización de inputs**: Todos los inputs de usuario validados y sanitizados
- [ ] **Prevención de XSS**: Sin dangerouslySetInnerHTML con contenido de usuario

### Seguridad de API

- [ ] **API keys** no expuestas en código del cliente (usa patrón Liquid o proxy backend)
- [ ] **CORS** configurado correctamente en backend
- [ ] **Rate limiting** considerado en manejo de errores
- [ ] **Interceptores** de request/response manejan errores de auth elegantemente

### Seguridad de Contenido

- [ ] **Headers CSP** configurados apropiadamente
- [ ] **Scripts externos** minimizados y de fuentes confiables
- [ ] **Integridad de subrecursos** usada para recursos de CDN

## Accesibilidad (WCAG 2.1 AA)

### Navegación

- [ ] **Navegación por teclado** funciona para todos los elementos interactivos
- [ ] **Indicadores de focus** visibles (no remover outline sin alternativa)
- [ ] **Skip links** proporcionados para contenido principal
- [ ] **Manejo de focus** correcto después de cerrar modales/diálogos

### Contenido

- [ ] **Texto alternativo** proporcionado para todas las imágenes significativas
- [ ] **Labels de formularios** correctamente asociados con inputs
- [ ] **Mensajes de error** descriptivos y asociados programáticamente
- [ ] **Contraste de color** cumple 4.5:1 para texto (usa los temas integrados de Dynamic)

### Lectores de Pantalla

- [ ] **ARIA labels** usados donde se necesitan (los componentes de Dynamic los incluyen)
- [ ] **Live regions** anuncian cambios de contenido dinámico
- [ ] **Jerarquía de encabezados** lógica (h1 → h2 → h3)
- [ ] **Títulos de página** descriptivos y únicos por ruta

### Testing

- [ ] **Testing solo con teclado** realizado
- [ ] **Testing con lector de pantalla** realizado (VoiceOver, NVDA)
- [ ] **axe DevTools** o testing de accesibilidad automatizado similar

## Manejo de Errores

### Errores de Usuario

- [ ] **Error boundaries** envuelven secciones principales
  ```tsx
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Dashboard />
  </ErrorBoundary>
  ```

- [ ] **Errores de API** muestran mensajes amigables al usuario
- [ ] **Fallas de red** manejadas elegantemente con opciones de reintento
- [ ] **Estados vacíos** diseñados para escenarios sin datos

### Tracking de Errores

- [ ] **Monitoreo de errores** configurado (Sentry, DataDog, etc.)
- [ ] **Source maps** subidos para debugging en producción
- [ ] **Contexto de error** capturado (ID de usuario, ruta, versión de app)

## Testing

### Cobertura de Tests

- [ ] **Tests unitarios** para utilidades y lógica de negocio (>80% cobertura)
- [ ] **Tests de componentes** para componentes UI críticos
- [ ] **Tests de integración** para flujos de usuario
- [ ] **Tests E2E** para paths críticos (login, transferencias, etc.)

### Entorno de Tests

- [ ] **Datos de test** aislados de producción
- [ ] **Servicios mock** configurados para testing offline
- [ ] **Pipeline CI** ejecuta tests en cada PR

## Build y Deploy

### Configuración de Build

- [ ] **Variables de entorno** correctamente configuradas para producción
- [ ] **Source maps** configurados (externos para tracking de errores)
- [ ] **Modo producción** habilitado (React, Vite)
- [ ] **Código muerto eliminado** vía tree shaking

### Deployment

- [ ] **Entorno staging** probado antes de producción
- [ ] **Plan de rollback** documentado y probado
- [ ] **Health checks** configurados
- [ ] **Alertas de monitoreo** configuradas

### Específico de Modyo

- [ ] **Nombre del widget** y metadata correctamente configurados en `.modyo/config.json`
- [ ] **Variables Liquid** probadas con valores de producción
- [ ] **Paths de assets** resuelven correctamente en contexto de Modyo
- [ ] **Preview probado** en Modyo antes de publicar

## Monitoreo y Analytics

### Monitoreo de Aplicación

- [ ] **Core Web Vitals** trackeados (LCP, INP, CLS)
- [ ] **Tasas de error** monitoreadas
- [ ] **Tiempos de respuesta de API** trackeados
- [ ] **Tasas de completación** de user journey medidas

### Métricas de Negocio

- [ ] **Eventos de analytics** implementados para acciones clave
- [ ] **Funnels de conversión** trackeados
- [ ] **Uso de features** medido para feature flags

## Documentación

- [ ] **README** actualizado con setup de producción
- [ ] **Variables de entorno** documentadas
- [ ] **Dependencias de API** documentadas
- [ ] **Proceso de deployment** documentado
- [ ] **Guía de troubleshooting** creada

## Verificación Final

Antes de ir a producción:

1. [ ] **Auditoría Lighthouse** con scores >90 para Performance, Accessibility, Best Practices
2. [ ] **Testing cross-browser** completado (Chrome, Firefox, Safari, Edge)
3. [ ] **Testing móvil** completado en dispositivos reales
4. [ ] **Testing de carga** realizado si se espera alto tráfico
5. [ ] **Auditoría de seguridad** completada (penetration testing para apps financieras)
6. [ ] **Revisión legal/compliance** completada (política de privacidad, términos)

## Comandos de Referencia Rápida

```bash
# Build para producción
npm run build

# Analizar bundle
npm run build -- --analyze

# Ejecutar todos los tests
npm test -- --coverage

# Verificar lint y formato
npm run lint && npm run format:check

# Deploy a Modyo staging
npm run modyo:push -- --environment staging

# Deploy a Modyo producción
npm run modyo:push -- --environment production
```

## Recursos

- [Guías WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)
- [Checklist de Seguridad OWASP](https://owasp.org/www-project-web-security-testing-guide/)
- [Rendimiento en React](https://react.dev/learn/render-and-commit)
