# EntityRefundResponseSource

Where the funds will be pulled back from.

## Example Usage

```typescript
import { EntityRefundResponseSource } from "mollie-api-typescript/models";

let value: EntityRefundResponseSource = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [models.RefundRoutingReversalsSourceType](../models/refundroutingreversalssourcetype.md) | :heavy_minus_sign:                                                                       | The type of source. Currently only the source type `organization` is supported.          | organization                                                                             |
| `organizationId`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | org_1234567                                                                              |