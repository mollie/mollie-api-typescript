# ListSubscriptionsPayments

The API resource URL of the [payments](list-payments) created for this subscription. Omitted if no such payments exist (yet).

## Example Usage

```typescript
import { ListSubscriptionsPayments } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionsPayments = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |