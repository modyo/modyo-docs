---
search: false
---

# Product Detail

The product detail shows in more detail the relevant information of the product being consulted, giving the possibility of switching between several of the same type if they exist, such as between several credits or several credit cards. 
In addition, for each of the products you can see the history of transactions that have been made since their creation.


The widget is versatile for displaying information for 4 types of products (savings accounts, checking accounts, credits and credit cards) which must be specified by means of a Liquid variable.

```bash
modyo-cli get modyo-widget-retail-product-detail
```

The widget is linked to the `modyo-service-retail` package where it connects to the product and transaction repository

 <img src="/assets/img/dynamic/experiences/retail/product-detail.jpg" style="border: 1px solid #EEE; margin-top: 40px"> 

<! --
### Components of the Design System

- mApp
- MButton
- MiCon
- Skeleton
- MListItem
- Modal
- MCurrency
- MCalendar
- mDropdown


### Liquid Variables

- api-path
- use-authentication
- product-filter-by-type
- transfers-path
- pay-debt-path
- payments-path
- loan-application-path
-->