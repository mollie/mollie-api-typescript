# PaymentCreateRouteRequest

## Example Usage

```typescript
import { PaymentCreateRouteRequest } from "mollie-api-typescript/models/operations";

let value: PaymentCreateRouteRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `paymentId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related payment.                                                               | tr_5B8cwPMGnU                                                                                        |
| `requestBody`                                                                                        | [operations.PaymentCreateRouteRequestBody](../../models/operations/paymentcreaterouterequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |