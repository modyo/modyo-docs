---
search: false
---

# Loan Approval

This widget allows the approval of a previously requested consumer credit. The credit terms are generated and the application can be accepted or denied before Mambu. If accepted, the identity is validated through an OTP (Mock), the account that will receive the disbursement is selected and the credit process is completed.

```bash
modyo-cli get modyo-widget-retail-loan-approval
```

The widget is linked to the `modyo-service-retail` package where it connects to the Credit Request repository

<img src="/assets/img/dynamic/experiences/retail/loan-approval.jpg" style="border: 1px solid #EEE; margin-top: 40px">

<! --
### Components of the Design System
- mApp
- ModalContextProvider
- Skeleton
- Modal
- MListItem
- MQuickAction
- MButton 
- mCurrencyText
- MiCon

### Liquid Variables
- dashboard-path
- api-user-id
- api-path
- mock-loans-otp
- mock-loans
- mock-products
-->