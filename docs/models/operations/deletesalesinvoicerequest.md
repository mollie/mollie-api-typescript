# DeleteSalesInvoiceRequest

## Example Usage

```typescript
import { DeleteSalesInvoiceRequest } from "mollie-api-typescript/models/operations";

let value: DeleteSalesInvoiceRequest = {
  salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `salesInvoiceId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related sales invoice.                                     | invoice_4Y0eZitmBnQ6IDoMqZQKh                                                    |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |
| `deleteValuesSalesInvoice`                                                       | [models.DeleteValuesSalesInvoice](../../models/deletevaluessalesinvoice.md)      | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |