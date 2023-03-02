---
search: false
---
# Dashboard Payments
**[Repository](https://github.com/modyo-dynamic/modyo-widget-retail-dashboard-payments)** 

El Dashboard de pagos muestra una lista con los productos de tarjetas de crédito y préstamos, permitiendo un acceso rápido para realizar los pagos de las obligaciones. Cuenta con un panel alternativo que permite visualizar los pagos que han sido programados. Este widget redirecciona al widget de pago de deuda.

```bash
modyo-cli get modyo-widget-retail-dashboard-payments
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de productos filtrado por tipo `loan`.

### Componentes del Design System
- MApp
- MButton
- MIcon
- MQuickAction
- MSkeleton

### Variables de Liquid
- products-path
- api-user-id
- api-path
- mock-products
- mock-categories
