# CancelPaymentRequest

## Example Usage

```typescript
import { CancelPaymentRequest } from "mollie-api-typescript/models/operations";

let value: CancelPaymentRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `paymentId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related payment.                                                     | tr_5B8cwPMGnU                                                                              |
| `requestBody`                                                                              | [operations.CancelPaymentRequestBody](../../models/operations/cancelpaymentrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |