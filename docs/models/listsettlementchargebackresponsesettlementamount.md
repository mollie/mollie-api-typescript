# ListSettlementChargebackResponseSettlementAmount

The amount deducted from your account balance for this chargeback, converted to the currency your account is
settled in. Always a **negative** amount.

## Example Usage

```typescript
import { ListSettlementChargebackResponseSettlementAmount } from "mollie-api-typescript/models";

let value: ListSettlementChargebackResponseSettlementAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |