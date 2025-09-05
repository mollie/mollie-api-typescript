# SalesInvoiceLineItemResponse

## Example Usage

```typescript
import { SalesInvoiceLineItemResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceLineItemResponse = {
  description: "LEGO 4440 Forest Police Station",
  quantity: 1,
  vatRate: "21.00",
  unitPrice: {
    currency: "EUR",
    value: "10.00",
  },
  discount: {
    type: "amount",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | A description of the line item. For example *LEGO 4440 Forest Police Station*.                    | LEGO 4440 Forest Police Station                                                                   |
| `quantity`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | The number of items.                                                                              | 1                                                                                                 |
| `vatRate`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | The vat rate to be applied to this line item.                                                     | 21.00                                                                                             |
| `unitPrice`                                                                                       | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `discount`                                                                                        | [models.SalesInvoiceDiscountResponse](../models/salesinvoicediscountresponse.md)                  | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |