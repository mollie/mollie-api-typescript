# PaymentListRoutesEmbedded

## Example Usage

```typescript
import { PaymentListRoutesEmbedded } from "mollie-api-typescript/models/operations";

let value: PaymentListRoutesEmbedded = {
  routes: [
    {
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
      },
      createdAt: "2024-03-20T09:13:37+00:00",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `routes`                                                              | [models.ListRouteGetResponse](../../models/listroutegetresponse.md)[] | :heavy_check_mark:                                                    | An array of route objects.                                            |