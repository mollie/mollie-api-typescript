# UpdatePaymentRequest

## Example Usage

```typescript
import { UpdatePaymentRequest } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `paymentId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related payment.                                                     | tr_5B8cwPMGnU                                                                              |
| `requestBody`                                                                              | [operations.UpdatePaymentRequestBody](../../models/operations/updatepaymentrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |