# VerifyPayeeRequest

## Example Usage

```typescript
import { VerifyPayeeRequest } from "mollie-api-typescript/models/operations";

let value: VerifyPayeeRequest = {
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |
| `verificationOfPayeeRequest`                                                     | [models.VerificationOfPayeeRequest](../../models/verificationofpayeerequest.md)  | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |