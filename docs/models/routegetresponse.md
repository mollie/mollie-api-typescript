# RouteGetResponse

## Example Usage

```typescript
import { RouteGetResponse } from "mollie-api-typescript/models";

let value: RouteGetResponse = {
  resource: "route",
  id: "crt_dyARQ3JzCgtPDhU2Pbq3J",
  paymentId: "tr_5B8cwPMGnU",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "Payment for Order #12345",
  destination: {
    type: "organization",
    organizationId: "org_1234567",
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
  createdAt: "2024-03-20T09:13:37+00:00",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Indicates the response contains a route object. Will always contain the string `route` for this endpoint. | route                                                                                                     |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | crt_dyARQ3JzCgtPDhU2Pbq3J                                                                                 |
| `paymentId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | tr_5B8cwPMGnU                                                                                             |
| `amount`                                                                                                  | [models.Amount](../models/amount.md)                                                                      | :heavy_check_mark:                                                                                        | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.         |                                                                                                           |
| `description`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The description of the route. This description is shown in the reports.                                   | Payment for Order #12345                                                                                  |
| `destination`                                                                                             | [models.RouteGetResponseDestination](../models/routegetresponsedestination.md)                            | :heavy_check_mark:                                                                                        | The destination of the route.                                                                             |                                                                                                           |
| `links`                                                                                                   | [models.RouteGetResponseLinks](../models/routegetresponselinks.md)                                        | :heavy_check_mark:                                                                                        | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.         |                                                                                                           |
| `createdAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.     | 2024-03-20T09:13:37+00:00                                                                                 |