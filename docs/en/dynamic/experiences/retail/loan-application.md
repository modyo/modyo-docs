---
search: false
---

# Loan Application

This widget allows the simulation of a consumer credit. Through the customer's profile, information is obtained on the fees and the maximum and minimum amount that they can request. After the estimate, the request to Mambu can be accepted or denied, if it is accepted, a request from before Mambu is generated, which will be approved in the shortest possible time.

```bash
modyo-cli get modyo-widget-retail-loan-application
```

The widget is linked to the `modyo-service-retail` package where it connects to the Credit Request repository

 <img src="/assets/img/dynamic/experiences/retail/loan-application-with-data.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

<! --
### Components of the Design System
- mApp
- ModalContextProvider
- mCurrencyText
- MTooltip
- MButton
- MiCon
- MCurrency
- Modal
- MOFFCanvas

### Liquid Variables
- dashboard-path
- api-user-id
- api-path
- mock-loans
-->