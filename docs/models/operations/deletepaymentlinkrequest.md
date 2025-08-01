# DeletePaymentLinkRequest

## Example Usage

```typescript
import { DeletePaymentLinkRequest } from "mollie-api-typescript/models/operations";

let value: DeletePaymentLinkRequest = {
  paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `paymentLinkId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Provide the ID of the related payment link.                                                        | pl_d9fQur83kFdhH8hIhaZfq                                                                           |
| `requestBody`                                                                                      | [operations.DeletePaymentLinkRequestBody](../../models/operations/deletepaymentlinkrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |