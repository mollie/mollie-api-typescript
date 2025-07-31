# ListAllSubscriptionsTerminal

The API resource URL of the [terminal](get-terminal) this payment was created for. Only present for
point-of-sale payments.

## Example Usage

```typescript
import { ListAllSubscriptionsTerminal } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsTerminal = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |