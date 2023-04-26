---
search: false
---
# Pay Debt

The Pay Debt widget shows the deadline and the minimum payment that must be made on the obligation. You can also pay the full balance or partial balance. It has payment alternatives in case the customer cannot make the payment

```bash
modyo-cli get modyo-widget-retail-pay-debt
```

The widget is linked to the `modyo-service-retail` package where it connects to the product details repository.

### Deployment Requirement: 
Send the `ID` of the product to be paid in the URL with the following query param: `product_id=8a44adb785bff26e0185c04cff090942`

<img src="/assets/img/dynamic/experiences/retail/pay-debt.jpg" style="border: 1px solid #EEE; margin-top: 40px">

<! --
### Components of the Design System
- mApp
- MoastContainer
- Modal
- MButton
- MCalendar
- MFormSwitch
- mSegmentControl
- mSegmentControlItem
- mCurrencyText
- Select
- mShortcutToggle
- MCurrency
- Mint
- McCounter
- MFormCheck
- MiCon
- MQuickAction
- Skeleton
- ModalContextProvider

### Liquid Variables
- products-path
- api-user-id
- api-path
- mock-products
- mock-payment
-->