# ClientRequirementLinks

## Example Usage

```typescript
import { ClientRequirementLinks } from "mollie-api-typescript/models/operations";

let value: ClientRequirementLinks = {
  dashboard: {
    href: "https://my.mollie.com/dashboard/...",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dashboard`                                                                                                                                                     | [operations.ListClientsCapabilitiesDashboard](../../models/operations/listclientscapabilitiesdashboard.md)                                                      | :heavy_minus_sign:                                                                                                                                              | If known, a deep link to the Mollie dashboard of the client, where the requirement can be fulfilled.<br/>For example, where necessary documents are to be uploaded. | {<br/>"href": "https://my.mollie.com/dashboard/...",<br/>"type": "text/html"<br/>}                                                                              |