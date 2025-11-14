# RouteCreateResponse

## Example Usage

```typescript
import { RouteCreateResponse } from "mollie-api-typescript/models";

let value: RouteCreateResponse = {
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
| `destination`                                                                                             | [models.RouteCreateResponseDestination](../models/routecreateresponsedestination.md)                      | :heavy_check_mark:                                                                                        | The destination of the route.                                                                             |                                                                                                           |
| `links`                                                                                                   | [models.RouteCreateResponseLinks](../models/routecreateresponselinks.md)                                  | :heavy_check_mark:                                                                                        | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.         |                                                                                                           |