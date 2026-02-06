# PaymentGetRouteRequest

## Example Usage

```typescript
import { PaymentGetRouteRequest } from "mollie-api-typescript/models/operations";

let value: PaymentGetRouteRequest = {
  paymentId: "tr_5B8cwPMGnU",
  routeId: "crt_dyARQ3JzCgtPDhU2Pbq3J",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `paymentId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related payment.                                           | tr_5B8cwPMGnU                                                                    |
| `routeId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the route.                                                     | crt_dyARQ3JzCgtPDhU2Pbq3J                                                        |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |