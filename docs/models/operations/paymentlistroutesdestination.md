# PaymentListRoutesDestination

The destination of the route.

## Example Usage

```typescript
import { PaymentListRoutesDestination } from "mollie-api-typescript/models/operations";

let value: PaymentListRoutesDestination = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The type of destination. Currently only the destination type `organization` is supported.<br/><br/>Possible values: `organization` | organization                                                                                                               |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Required for destination type `organization`. The ID of the connected organization the funds should be routed to.          | org_1234567                                                                                                                |