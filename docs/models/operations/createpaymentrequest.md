# CreatePaymentRequest

## Example Usage

```typescript
import { CreatePaymentRequest } from "mollie-api-typescript/models/operations";

let value: CreatePaymentRequest = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `include`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | This endpoint allows you to include additional information via the `include` query string parameter. |
| `paymentRequest`                                                                                     | [models.PaymentRequest](../../models/paymentrequest.md)                                              | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |