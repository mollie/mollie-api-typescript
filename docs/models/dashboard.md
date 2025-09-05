# Dashboard

If known, a deep link to the Mollie dashboard of the client, where the requirement can be fulfilled.
For example, where necessary documents are to be uploaded.

## Example Usage

```typescript
import { Dashboard } from "mollie-api-typescript/models";

let value: Dashboard = {
  href: "https://my.mollie.com/dashboard/...",
  type: "text/html",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. |