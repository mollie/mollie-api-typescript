# ListCustomersMandates

The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no such mandates
exist (yet).

## Example Usage

```typescript
import { ListCustomersMandates } from "mollie-api-typescript/models/operations";

let value: ListCustomersMandates = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |