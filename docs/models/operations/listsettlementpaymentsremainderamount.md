# ListSettlementPaymentsRemainderAmount

An amount object for the amount that remained after all gift cards or vouchers were applied.

## Example Usage

```typescript
import { ListSettlementPaymentsRemainderAmount } from "mollie-api-typescript/models/operations";

let value: ListSettlementPaymentsRemainderAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |