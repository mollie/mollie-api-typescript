# GetInvoiceRequest

## Example Usage

```typescript
import { GetInvoiceRequest } from "mollie-api-typescript/models/operations";

let value: GetInvoiceRequest = {
  invoiceId: "inv_aHbjjdrUdm",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `invoiceId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related invoice.                                           | inv_aHbjjdrUdm                                                                   |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |