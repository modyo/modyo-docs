---
search: false
---

# Loan Approval
**[Repository](https://github.com/modyo-dynamic/modyo-widget-retail-loan-approval)**

Este widget permite la aprobación de un crédito de consumo previamente solicitado. Se generan las condiciones del crédito y se puede aceptar o denegar la solicitud ante Mambu, en caso de ser aceptada se valida la identidad a través de un OTP (Mock), se selecciona la cuenta que recibirá el desembolso y termina el proceso del crédito.

```bash
modyo-cli get modyo-widget-retail-loan-approval
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de Solicitud de crédito


### Componentes del Design System
- MApp
- ModalContextProvider
- MSkeleton
- MModal
- MListItem
- MQuickAction
- MButton 
- MCurrencyText
- MIcon

### Variables de Liquid
- dashboard-path
- api-user-id
- api-path
- mock-loans-otp
- mock-loans
- mock-products