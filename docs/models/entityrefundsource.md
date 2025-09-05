# EntityRefundSource

Where the funds will be pulled back from.

## Example Usage

```typescript
import { EntityRefundSource } from "mollie-api-typescript/models";

let value: EntityRefundSource = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`                                                                          | [models.RoutingReversalType](../models/routingreversaltype.md)                  | :heavy_minus_sign:                                                              | The type of source. Currently only the source type `organization` is supported. | organization                                                                    |
| `organizationId`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | org_1234567                                                                     |