---
search: false
---

# Dashboard 

El Dashboard de Banca Personas muestra un overview de toda la cartera de productos de un cliente, correspondiente a cuentas de ahorros, corrientes, tarjetas de crédito y préstamos. Mostrando datos como saldos disponibles, deudas y cupos. El usuario podrá dirigirse al detalle específico del producto que desee.
Adicionalmente, cuenta con un panel de transferencias rápidas a contactos, que redirecciona al widget de transferencias con los datos a través de Query Params.

```bash
modyo-cli get modyo-widget-retail-dashboard
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de productos, y se conecta con el repositorio de contactos (mocks)

### Componentes del Design System

- MApp
- MButton
- MIcon
- MQuickAction
- MSelect
- MCurrency
- MSkeleton

### Variables de Liquid
- product-path-saving
- product-path-checking
- product-path-credit-card
- product-path-loans
- transfers-path
- api-user-id
- api-path
- use-authentication
- mock-contacts
- mock-products
- mock-categories
