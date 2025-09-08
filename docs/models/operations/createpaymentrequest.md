# CreatePaymentRequest

## Example Usage

```typescript
import { CreatePaymentRequest } from "mollie-api-typescript/models/operations";

let value: CreatePaymentRequest = {
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `include`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | This endpoint allows you to include additional information via the `include` query string parameter. |                                                                                                      |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                     | 123e4567-e89b-12d3-a456-426                                                                          |
| `paymentRequest`                                                                                     | [models.PaymentRequest](../../models/paymentrequest.md)                                              | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |