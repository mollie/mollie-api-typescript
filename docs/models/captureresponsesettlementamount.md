# CaptureResponseSettlementAmount

This optional field will contain the approximate amount that will be settled to your account, converted to the
currency your account is settled in.

Since the field contains an estimated amount during capture processing, it may change over time. To retrieve
accurate settlement amounts we recommend using the [List balance transactions endpoint](list-balance-transactions)
instead.

## Example Usage

```typescript
import { CaptureResponseSettlementAmount } from "mollie-api-typescript/models";

let value: CaptureResponseSettlementAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |