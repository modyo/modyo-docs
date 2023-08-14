---
search: true
---
# Pay Debt

<img src="/assets/img/dynamic/experiences/retail/pay-debt.jpg" style="border: 1px solid #EEE; margin-top: 40px; max-width:900px;">

El widget Pay Debt muestra la fecha límite y el pago mínimo que se debe realizar de la obligación. También se puede realizar el pago del saldo total o saldo parcial. Cuenta con alternativas de pago en caso que el cliente no pueda realizar el pago

```bash
modyo-cli get modyo-widget-retail-pay-debt
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de detalles de producto.

### Requisito de despliegue: 
Enviar el `ID` del producto a pagar en la URL con el siguiente query param: `product_id=8a44adb785bff26e0185c04cff090942`


<!--
### Componentes del Design System
- MApp
- MToastContainer
- MModal
- MButton
- MCalendar
- MFormSwitch
- MSegmentControl
- MSegmentControlItem
- MCurrencyText
- MSelect
- MShortcutToggle
- MCurrency
- MHint
- MCounter
- MFormCheck
- MIcon
- MQuickAction
- MSkeleton
- ModalContextProvider

### Variables de Liquid
- products-path
- api-user-id
- api-path
- mock-products
- mock-payment
-->