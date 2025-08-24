---
search: true
---

# Personalización

Aprende cómo personalizar Dynamic Framework para que se ajuste perfectamente a la identidad y necesidades de tu institución.

## Contenido de la Sección

### [Sistema de Temas](theming.html)
Personalización completa del look & feel:
- Variables de tema
- Paletas de colores
- Tipografía
- Espaciados y tamaños

### [Estilos y CSS](styling.html)
Técnicas avanzadas de estilizado:
- CSS Modules
- Styled Components
- Utilidades CSS
- Responsive design

### [Extender Componentes](extending.html)
Crea tus propios componentes o extiende los existentes:
- Herencia de componentes
- Composición avanzada
- Props personalizados
- Componentes wrapper

## Niveles de Personalización

### Nivel 1: Configuración Básica
Cambios simples mediante variables de configuración:

```javascript
// theme.config.js
export default {
  colors: {
    primary: '#004B8D',
    secondary: '#00A0DF'
  },
  typography: {
    fontFamily: 'Inter, sans-serif'
  }
};
```

### Nivel 2: Estilos CSS
Sobrescribe estilos específicos:

```scss
// custom.scss
.df-button {
  border-radius: 12px;
  text-transform: uppercase;
  
  &--primary {
    background: linear-gradient(135deg, $primary, $secondary);
  }
}
```

### Nivel 3: Componentes Extendidos
Extiende funcionalidad de componentes base:

```jsx
// CustomButton.jsx
import { Button } from '@dynamic-framework/ui-react';

const CustomButton = ({ children, ...props }) => (
  <Button 
    {...props}
    className="custom-button"
    onClick={(e) => {
      analytics.track('button_click');
      props.onClick?.(e);
    }}
  >
    {children}
  </Button>
);
```

### Nivel 4: Componentes Propios
Crea componentes completamente nuevos:

```jsx
// BiometricAuth.jsx
const BiometricAuth = ({ onSuccess, onError }) => {
  // Implementación personalizada
  return (
    <div className="biometric-auth">
      {/* Tu componente único */}
    </div>
  );
};
```

## Estrategias de Personalización

### White Labeling Completo

Para instituciones que necesitan una identidad visual única:

1. **Define tu sistema de diseño**
   - Colores corporativos
   - Tipografías propias
   - Iconografía personalizada
   - Patrones visuales

2. **Implementa el tema**
   - Crea archivo de variables
   - Sobrescribe componentes base
   - Agrega elementos únicos

3. **Mantén consistencia**
   - Documenta decisiones
   - Crea guía de estilo
   - Automatiza validaciones

### Personalización Progresiva

Enfoque recomendado para implementaciones rápidas:

```
Fase 1: Usa defaults de Dynamic
↓
Fase 2: Ajusta colores y logos
↓
Fase 3: Personaliza componentes clave
↓
Fase 4: Agrega componentes propios
↓
Fase 5: Refinamiento continuo
```

### Multi-tenancy

Para instituciones con múltiples marcas:

```javascript
// multi-theme.js
const themes = {
  'brand-a': {
    primary: '#FF0000',
    logo: '/logos/brand-a.svg'
  },
  'brand-b': {
    primary: '#00FF00',
    logo: '/logos/brand-b.svg'
  }
};

// Aplicar tema dinámicamente
<ThemeProvider theme={themes[currentBrand]}>
  <App />
</ThemeProvider>
```

## Herramientas de Personalización

### Theme Builder
Herramienta visual para crear temas:
- Preview en tiempo real
- Exportación de variables
- Validación de accesibilidad
- Generación de documentación

### Design Tokens
Sistema de tokens para mantener consistencia:

```json
{
  "color": {
    "primary": {
      "value": "#004B8D",
      "type": "color"
    }
  },
  "spacing": {
    "small": {
      "value": "8px",
      "type": "spacing"
    }
  }
}
```

### Storybook
Documenta y prueba personalizaciones:
- Catálogo de componentes
- Variantes visuales
- Estados interactivos
- Documentación viva

## Casos de Uso Comunes

### Dark Mode
```scss
[data-theme="dark"] {
  --df-bg-primary: #1a1a1a;
  --df-text-primary: #ffffff;
  --df-border-color: #333333;
}
```

### Modo Alto Contraste
```scss
[data-contrast="high"] {
  --df-text-primary: #000000;
  --df-bg-primary: #ffffff;
  --df-border-width: 2px;
}
```

### Temas Estacionales
```javascript
const seasonalThemes = {
  christmas: {
    primary: '#c41e3a',
    secondary: '#165b33'
  },
  summer: {
    primary: '#ffd700',
    secondary: '#00bfff'
  }
};
```

## Mejores Prácticas

### Recomendaciones

1. **Mantén la accesibilidad**
   - Verifica contraste de colores
   - Prueba con screen readers
   - Valida navegación por teclado

2. **Documenta cambios**
   - Crea changelog de personalizaciones
   - Mantén guía de estilo actualizada
   - Comenta código personalizado

3. **Versiona temas**
   - Usa control de versiones
   - Tag releases importantes
   - Mantén backups

4. **Optimiza performance**
   - Minimiza CSS personalizado
   - Usa CSS variables para temas dinámicos
   - Lazy load temas alternativos

### Precauciones

1. **No modifiques core**
   - Nunca edites archivos de Dynamic directamente
   - Usa extensión, no modificación
   - Mantén upgradeability

2. **Evita !important**
   - Usa especificidad correcta
   - Aprovecha cascada CSS
   - Mantén código limpio

3. **Test cross-browser**
   - Prueba en todos los navegadores objetivo
   - Valida en diferentes dispositivos
   - Considera progressive enhancement

## Ejemplos Reales

### Banco con Identidad Fuerte
```scss
// Personalización completa manteniendo Dynamic
.df-component {
  // Respeta estructura base
  @extend %df-component-base;
  
  // Agrega personalización
  border-radius: var(--bank-radius);
  box-shadow: var(--bank-shadow);
  
  &::before {
    content: '';
    background: url('/bank-pattern.svg');
  }
}
```

### Fintech Minimalista
```javascript
// Tema minimalista
const minimalTheme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#0066ff'
  },
  typography: {
    fontFamily: 'Helvetica Neue, sans-serif',
    scale: 1.25
  },
  spacing: {
    unit: 16
  },
  borders: {
    radius: 0,
    width: 1
  }
};
```

## Recursos

- **Figma UI Kit**: Diseña con componentes Dynamic
- **Theme Gallery**: Ejemplos de personalizaciones
- **Color Tools**: Generadores de paletas accesibles
- **Icon Library**: Biblioteca de iconos financieros

## Soporte

¿Necesitas ayuda con personalización?

- **Consultoría de diseño**: Sesiones con expertos UX
- **Review de accesibilidad**: Auditoría de personalización
- **Optimización**: Análisis de performance
- **Training**: Workshops de personalización

## Próximos Pasos

- Explora el [sistema de temas](theming.html)
- Aprende sobre [estilos y CSS](styling.html)
- Descubre cómo [extender componentes](extending.html)