---
search: false
---

# Product Detail
**[Repository](https://github.com/modyo-dynamic/modyo-widget-retail-product-detail)**

El detalle del producto muestra en más detalle la información relevante del producto que se está consultando, dando la posibilidad de cambiar entre varios del mismo tipo si es que estos existen, como por ejemplo, entre varios créditos o varias tarjetas de crédito. 
Adicional, para cada uno de los productos se puede ver el historial de transacciones que se le han realizado desde su creación.


El widget es versátil para mostrar la información de 4 tipos de productos (cuentas de ahorro, cuentas corriente, créditos y tarjetas de crédito) la cual debe ser especificada por medio de una variable de Liquid.

```bash
modyo-cli get modyo-widget-retail-product-detail
```

El widget está vinculado con el paquete `modyo-service-retail` donde se conecta con el repositorio de productos y transacciones

### Componentes del Design System

- MApp
- MButton
- MIcon
- MSkeleton
- MListItem
- MModal
- MCurrency
- MCalendar
- MDropdown


### Variables de liquid

- api-path
- use-authentication
- product-filter-by-type
- transfers-path
- pay-debt-path
- payments-path
- loan-application-path
