# EntityInvoiceLine

## Example Usage

```typescript
import { EntityInvoiceLine } from "mollie-api-typescript/models";

let value: EntityInvoiceLine = {
  period: "2024-01",
  description: "Product #1",
  count: 3,
  vatPercentage: 21,
  amount: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `period`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | The administrative period in `YYYY-MM` on which the line should be booked.                        | 2024-01                                                                                           |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | Description of the product.                                                                       | Product #1                                                                                        |
| `count`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of products invoiced. For example, the number of payments.                                 | 3                                                                                                 |
| `vatPercentage`                                                                                   | *number*                                                                                          | :heavy_check_mark:                                                                                | VAT percentage rate that applies to this product.                                                 | 21                                                                                                |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |