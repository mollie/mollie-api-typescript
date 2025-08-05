# ListAllSubscriptionsAmount

The amount for each individual payment that is charged with this subscription. For example, for a monthly
subscription of €10, the subscription amount should be set to €10.

## Example Usage

```typescript
import { ListAllSubscriptionsAmount } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |