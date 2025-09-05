# PaymentCreateRouteRequest

## Example Usage

```typescript
import { PaymentCreateRouteRequest } from "mollie-api-typescript/models/operations";

let value: PaymentCreateRouteRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `paymentId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Provide the ID of the related payment.                          | tr_5B8cwPMGnU                                                   |
| `routeCreateRequest`                                            | [models.RouteCreateRequest](../../models/routecreaterequest.md) | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |