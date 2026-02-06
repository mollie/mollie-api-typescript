# RouteCreateRequestDestination

The destination of the route.

## Example Usage

```typescript
import { RouteCreateRequestDestination } from "mollie-api-typescript/models";

let value: RouteCreateRequestDestination = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `type`                                                                                    | [models.RouteDestinationType](../models/routedestinationtype.md)                          | :heavy_check_mark:                                                                        | The type of destination. Currently only the destination type `organization` is supported. | organization                                                                              |
| `organizationId`                                                                          | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | org_1234567                                                                               |