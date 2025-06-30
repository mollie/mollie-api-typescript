# UpdatePaymentLinkUnitPriceResponse

The price of a single item including VAT.

For example: `{"currency":"EUR", "value":"89.00"}` if the box of LEGO costs €89.00 each.

For types `discount`, `store_credit`, and `gift_card`, the unit price must be negative.

The unit price can be zero in case of free items.

## Example Usage

```typescript
import { UpdatePaymentLinkUnitPriceResponse } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentLinkUnitPriceResponse = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |