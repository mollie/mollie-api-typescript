# EntityRefundRoutingReversal

## Example Usage

```typescript
import { EntityRefundRoutingReversal } from "mollie-api-typescript/models";

let value: EntityRefundRoutingReversal = {
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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `source`                                                                                          | [models.EntityRefundSource](../models/entityrefundsource.md)                                      | :heavy_minus_sign:                                                                                | Where the funds will be pulled back from.                                                         |