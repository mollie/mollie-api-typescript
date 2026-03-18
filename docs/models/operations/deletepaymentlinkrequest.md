# DeletePaymentLinkRequest

## Example Usage

```typescript
import { DeletePaymentLinkRequest } from "mollie-api-typescript/models/operations";

let value: DeletePaymentLinkRequest = {
  paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `paymentLinkId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Provide the ID of the related payment link.                                                        | pl_d9fQur83kFdhH8hIhaZfq                                                                           |
| `idempotencyKey`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                   | 123e4567-e89b-12d3-a456-426                                                                        |
| `requestBody`                                                                                      | [operations.DeletePaymentLinkRequestBody](../../models/operations/deletepaymentlinkrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |