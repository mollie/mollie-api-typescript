# RouteCreateRequest

Payload to create a new delayed route for a payment.

## Example Usage

```typescript
import { RouteCreateRequest } from "mollie-api-typescript/models";

let value: RouteCreateRequest = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  destination: {
    type: "organization",
    organizationId: "org_1234567",
  },
  description: "Payment for Order #12345",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `destination`                                                                                     | [models.RouteCreateRequestDestination](../models/routecreaterequestdestination.md)                | :heavy_check_mark:                                                                                | The destination of the route.                                                                     |                                                                                                   |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Description shown in reports.                                                                     | Payment for Order #12345                                                                          |