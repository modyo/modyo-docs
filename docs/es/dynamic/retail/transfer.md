---
search: false
---

# Transfer
**[Repository](https://github.com/modyo-dynamic/modyo-widget-retail-transfer)**

Permite realizar transferencias entre las cuentas de depósito activas que tenga un cliente, generando un movimiento de entrada o salida en cada una de las cuentas. También permite compartir el resultado de la transacción exitosa por medio de una imagen o un pdf.

```bash
modyo-cli get modyo-widget-retail-transfer
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de productos, transferencias y contactos (Mocked)

### Componentes del Design System

- MApp
- MButton
- MIcon
- MSkeleton
- MListItem
- MQuickAction
- MModal
- MCurrency
- MCalendar
- MFormSwitch
- MSelect

### Variables de liquid

- api-path
- use-authentication
- mock-products
- mock-banks
- mock-contacts
- mock-transfers
- dashboard-path
