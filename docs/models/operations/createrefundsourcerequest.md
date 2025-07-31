# CreateRefundSourceRequest

Where the funds will be pulled back from.

## Example Usage

```typescript
import { CreateRefundSourceRequest } from "mollie-api-typescript/models/operations";

let value: CreateRefundSourceRequest = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                              | [operations.RoutingReversalType](../../models/operations/routingreversaltype.md)                                    | :heavy_minus_sign:                                                                                                  | The type of source. Currently only the source type `organization` is supported.                                     | organization                                                                                                        |
| `organizationId`                                                                                                    | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Required for source type `organization`. The ID of the connected organization the funds should be pulled<br/>back from. | org_1234567                                                                                                         |