# ListEntityRefundRoutingReversal

## Example Usage

```typescript
import { ListEntityRefundRoutingReversal } from "mollie-api-typescript/models";

let value: ListEntityRefundRoutingReversal = {
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
| `source`                                                                                          | [models.ListEntityRefundSource](../models/listentityrefundsource.md)                              | :heavy_minus_sign:                                                                                | Where the funds will be pulled back from.                                                         |