# ListRefundResponseRoutingReversal

## Example Usage

```typescript
import { ListRefundResponseRoutingReversal } from "mollie-api-typescript/models";

let value: ListRefundResponseRoutingReversal = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  source: {
    organizationId: "org_1234567",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `source`                                                                                          | [models.ListRefundResponseSource](../models/listrefundresponsesource.md)                          | :heavy_minus_sign:                                                                                | Where the funds will be pulled back from.                                                         |