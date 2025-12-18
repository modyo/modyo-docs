---
search: true
---

# Experiencias y Plantillas

Dynamic Framework incluye un catálogo de experiencias prediseñadas basadas en React para acelerar el desarrollo de soluciones bancarias y financieras. Estas plantillas son personalizables y están listas para producción.

## Catálogo de Experiencias

### Retail Banking

Experiencias digitales para clientes individuales: onboarding, cuentas, pagos y préstamos personales.

**Plantillas disponibles:**
- Dashboard personal
- Detalle de producto
- Transferencias
- Gestión de disputas

### Business Banking

Soluciones para clientes corporativos: cash management, crédito comercial y servicios para comercios.

**Plantillas disponibles:**
- Dashboard corporativo
- Gestión de empleados
- Autorización de pagos masivos
- Transferencias empresariales

### Inversiones

Productos digitales para gestión patrimonial, corretaje y seguimiento de portafolios de inversión.

**Plantillas disponibles:**
- Dashboard de inversiones
- Resumen de inversiones
- Detalle de cuenta
- Nueva inversión a plazo

### Marketing

Sitios públicos y landing pages para promocionar productos y servicios financieros.

**Plantillas disponibles:**
- Hero sections
- Formularios de contacto
- FAQs
- Footer

## Instalación

Las experiencias públicas pueden descargarse usando el CLI de Modyo:

```bash
# Descargar una experiencia
npx @modyo/cli@latest get <nombre-template> <directorio-destino>

# Ejemplo: descargar template base
npx @modyo/cli@latest get dynamic-react-base-template mi-widget

# Especificar versión
npx @modyo/cli@latest get dynamic-react-base-template@v1.0.0 mi-widget
```

El CLI descarga templates desde la organización `dynamic-framework` en GitHub. Puedes especificar otra organización con `--organization=miOrg`.

## Personalización

Las experiencias se personalizan mediante el sistema de tokens de diseño de Dynamic Framework. Consulta la documentación de theming para adaptar colores, tipografía y espaciado a tu marca.

## Más Información

- **Catálogo completo**: [dynamic.modyo.com/experiences](https://dynamic.modyo.com/experiences)
- **Retail Banking**: [dynamic.modyo.com/experiences/retail](https://dynamic.modyo.com/experiences/retail)
- **Business Banking**: [dynamic.modyo.com/experiences/business](https://dynamic.modyo.com/experiences/business)
- **Inversiones**: [dynamic.modyo.com/experiences/investment](https://dynamic.modyo.com/experiences/investment)
- **Marketing**: [dynamic.modyo.com/experiences/marketing](https://dynamic.modyo.com/experiences/marketing)