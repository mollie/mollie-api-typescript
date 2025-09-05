# EntityInvoiceLine

## Example Usage

```typescript
import { EntityInvoiceLine } from "mollie-api-typescript/models";

let value: EntityInvoiceLine = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `period`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | The administrative period in `YYYY-MM` on which the line should be booked.                        |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Description of the product.                                                                       |
| `count`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of products invoiced. For example, the number of payments.                                 |
| `vatPercentage`                                                                                   | *number*                                                                                          | :heavy_minus_sign:                                                                                | VAT percentage rate that applies to this product.                                                 |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |