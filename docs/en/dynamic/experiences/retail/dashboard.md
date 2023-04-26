---
search: false
---

# Dashboard 

The Personal Banking Dashboard shows an overview of a customer's entire product portfolio, corresponding to savings accounts, checking accounts, credit cards and loans. Showing data such as available balances, debts and quotas. The user can go to the specific detail of the product they want.
In addition, it has a panel for quick transfers to contacts, which redirects the data to the transfer widget through Query Params.

```bash
modyo-cli get modyo-widget-retail-dashboard
```

The widget is linked to the `modyo-service-retail` package where it connects to the product repository, and connects to the contact repository (mocks)
 <img src="/assets/img/dynamic/experiences/retail/dashboard.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

<! --
### Components of the Design System

- mApp
- MButton
- MiCon
- MQuickAction
- Select
- MCurrency
- Skeleton

### Liquid Variables
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
-->