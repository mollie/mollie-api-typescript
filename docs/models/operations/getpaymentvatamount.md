# GetPaymentVatAmount

The amount of value-added tax on the line. The `totalAmount` field includes VAT, so the `vatAmount` can be
calculated with the formula `totalAmount × (vatRate / (100 + vatRate))`.

Any deviations from this will result in an error.

For example, for a `totalAmount` of SEK 100.00 with a 25.00% VAT rate, we expect a VAT amount of
`SEK 100.00 × (25 / 125) = SEK 20.00`.

## Example Usage

```typescript
import { GetPaymentVatAmount } from "mollie-api-typescript/models/operations";

let value: GetPaymentVatAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |