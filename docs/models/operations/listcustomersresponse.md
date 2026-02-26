# ListCustomersResponse

## Example Usage

```typescript
import { ListCustomersResponse } from "mollie-api-typescript/models/operations";

let value: ListCustomersResponse = {
  result: {
    count: 5,
    embedded: {
      customers: [
        {
          resource: "customer",
          id: "cst_5B8cwPMGnU",
          mode: "live",
          name: "John Doe",
          email: "example@email.com",
          locale: "en_US",
          metadata: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          createdAt: "2024-03-20T09:13:37+00:00",
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
          },
        },
      ],
    },
    links: {
      self: {
        href: "https://...",
        type: "application/hal+json",
      },
      previous: {
        href: "https://...",
        type: "application/hal+json",
      },
      next: {
        href: "https://...",
        type: "application/hal+json",
      },
      documentation: {
        href: "https://...",
        type: "application/hal+json",
      },
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.ListCustomersResponseBody](../../models/operations/listcustomersresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |