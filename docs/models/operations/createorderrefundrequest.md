# CreateOrderRefundRequest

## Example Usage

```typescript
import { CreateOrderRefundRequest } from "mollie-api-typescript/models/operations";

let value: CreateOrderRefundRequest = {
  orderId: "ord_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `orderId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Provide the ID of the related order.                                                               | ord_5B8cwPMGnU                                                                                     |
| `requestBody`                                                                                      | [operations.CreateOrderRefundRequestBody](../../models/operations/createorderrefundrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |