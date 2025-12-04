# ListEntityRefundResponseRoutingReversal

## Example Usage

```typescript
import { ListEntityRefundResponseRoutingReversal } from "mollie-api-typescript/models";

let value: ListEntityRefundResponseRoutingReversal = {
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
| `source`                                                                                          | [models.ListEntityRefundResponseSource](../models/listentityrefundresponsesource.md)              | :heavy_minus_sign:                                                                                | Where the funds will be pulled back from.                                                         |