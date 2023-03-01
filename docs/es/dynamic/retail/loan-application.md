---
search: false
---

# Loan Application
**[Repository](https://github.com/modyo-dynamic/modyo-widget-retail-loan-application)**

Este widget permite la simulación de un crédito de consumo, mediante el perfil del cliente se obtiene información sobre las cuotas y el monto máximo y mínimo que puede solicitar. Después de la estimación se puede aceptar o denegar la solicitud ante Mambu, en caso de ser aceptada se genera una solicitud de ante Mambu que será aprobada en el tiempo más breve posible.

```bash
modyo-cli get modyo-widget-retail-loan-application
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de Solicitud de crédito

### Componentes del Design System
- MApp
- ModalContextProvider
- MCurrencyText
- MTooltip
- MButton
- MIcon
- MCurrency
- MModal
- MOffcanvas

### Variables de Liquid
- dashboard-path
- api-user-id
- api-path
- mock-loans
