# RoutingReversalRequest

## Example Usage

```typescript
import { RoutingReversalRequest } from "mollie-api-typescript/models/operations";

let value: RoutingReversalRequest = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  source: {
    type: "organization",
    organizationId: "org_1234567",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `amount`                                                                                           | [operations.RoutingReversalAmountRequest](../../models/operations/routingreversalamountrequest.md) | :heavy_minus_sign:                                                                                 | The amount that will be pulled back.                                                               |
| `source`                                                                                           | [operations.CreateRefundSourceRequest](../../models/operations/createrefundsourcerequest.md)       | :heavy_minus_sign:                                                                                 | Where the funds will be pulled back from.                                                          |