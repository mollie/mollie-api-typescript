# UpdateSubscriptionMandate

The API resource URL of the [mandate](get-mandate) this subscription was created for.

## Example Usage

```typescript
import { UpdateSubscriptionMandate } from "mollie-api-typescript/models/operations";

let value: UpdateSubscriptionMandate = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |