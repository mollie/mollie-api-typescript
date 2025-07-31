# GetPaymentLinkPaymentsAmount

The amount that you want to charge, e.g. `{currency:"EUR", value:"1000.00"}` if you would want to charge €1000.00.

You can find the minimum and maximum amounts per payment method in our help center. Additionally, they can be
retrieved using the Get method endpoint.

If a tip was added for a Point-of-Sale payment, the amount will be updated to reflect the initial amount plus the
tip amount.

## Example Usage

```typescript
import { GetPaymentLinkPaymentsAmount } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkPaymentsAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |