# CreateRefundRoutingReversalResponse

## Example Usage

```typescript
import { CreateRefundRoutingReversalResponse } from "mollie-api-typescript/models/operations";

let value: CreateRefundRoutingReversalResponse = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [operations.CreateRefundRoutingReversalAmountResponse](../../models/operations/createrefundroutingreversalamountresponse.md) | :heavy_minus_sign:                                                                                                           | The amount that will be pulled back.                                                                                         |
| `source`                                                                                                                     | [operations.CreateRefundSourceOutput](../../models/operations/createrefundsourceoutput.md)                                   | :heavy_minus_sign:                                                                                                           | Where the funds will be pulled back from.                                                                                    |