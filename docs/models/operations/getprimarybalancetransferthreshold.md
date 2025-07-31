# GetPrimaryBalanceTransferThreshold

The minimum amount configured for scheduled automatic settlements. As soon as the amount on the balance exceeds
this threshold, the complete balance will be paid out to the transfer destination according to the configured
frequency.

## Example Usage

```typescript
import { GetPrimaryBalanceTransferThreshold } from "mollie-api-typescript/models/operations";

let value: GetPrimaryBalanceTransferThreshold = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |