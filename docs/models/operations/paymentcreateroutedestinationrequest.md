# PaymentCreateRouteDestinationRequest

The destination of the route.

## Example Usage

```typescript
import { PaymentCreateRouteDestinationRequest } from "mollie-api-typescript/models/operations";

let value: PaymentCreateRouteDestinationRequest = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                            | [operations.PaymentCreateRouteTypeRequest](../../models/operations/paymentcreateroutetyperequest.md)              | :heavy_check_mark:                                                                                                | The type of destination. Currently only the destination type `organization` is supported.                         | organization                                                                                                      |
| `organizationId`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Required for destination type `organization`. The ID of the connected organization the funds should be<br/>routed to. | org_1234567                                                                                                       |