# ListCustomersSubscriptions

The API resource URL of the [subscriptions](list-subscriptions) linked to this customer. Omitted if no such
subscriptions exist (yet).

## Example Usage

```typescript
import { ListCustomersSubscriptions } from "mollie-api-typescript/models/operations";

let value: ListCustomersSubscriptions = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |