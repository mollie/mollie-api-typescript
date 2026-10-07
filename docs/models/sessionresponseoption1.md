# SessionResponseOption1

## Example Usage

```typescript
import { SessionResponseOption1 } from "mollie-api-typescript/models";

let value: SessionResponseOption1 = {
  description: "Next day delivery",
  reference: "express",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The name of the shipping option, as shown to your customer.                                       | Next day delivery                                                                                 |
| `reference`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | Your own identifier for the shipping option.                                                      | express                                                                                           |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |