# PaymentCreateRouteRequestBody

## Example Usage

```typescript
import { PaymentCreateRouteRequestBody } from "mollie-api-typescript/models/operations";

let value: PaymentCreateRouteRequestBody = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "Payment for Order #12345",
  destination: {
    type: "organization",
    organizationId: "org_1234567",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                           | [operations.PaymentCreateRouteAmountRequest](../../models/operations/paymentcreaterouteamountrequest.md)           | :heavy_minus_sign:                                                                                                 | The amount of the route. That amount that will be routed to the specified destination.                             |                                                                                                                    |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The description of the route. This description is shown in the reports.                                            | Payment for Order #12345                                                                                           |
| `destination`                                                                                                      | [operations.PaymentCreateRouteDestinationRequest](../../models/operations/paymentcreateroutedestinationrequest.md) | :heavy_minus_sign:                                                                                                 | The destination of the route.                                                                                      |                                                                                                                    |