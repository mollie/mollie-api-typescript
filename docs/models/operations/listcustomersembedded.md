# ListCustomersEmbedded

## Example Usage

```typescript
import { ListCustomersEmbedded } from "mollie-api-typescript/models/operations";

let value: ListCustomersEmbedded = {
  customers: [
    {
      resource: "customer",
      id: "cst_5B8cwPMGnU",
      mode: "live",
      name: "John Doe",
      email: "example@email.com",
      locale: "en_US",
      createdAt: "2024-03-20T09:13:37.0Z",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        dashboard: {
          href: "https://...",
          type: "application/hal+json",
        },
        payments: {
          href: "https://...",
          type: "application/hal+json",
        },
        mandates: {
          href: "https://...",
          type: "application/hal+json",
        },
        subscriptions: {
          href: "https://...",
          type: "application/hal+json",
        },
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customers`                                                   | [models.CustomerResponse](../../models/customerresponse.md)[] | :heavy_check_mark:                                            | An array of customer objects.                                 |