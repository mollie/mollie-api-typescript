# CreateClientLinkResponse

The newly created client link object.

## Example Usage

```typescript
import { CreateClientLinkResponse } from "mollie-api-typescript/models/operations";

let value: CreateClientLinkResponse = {
  id: "cl_vZCnNQsV2UtfXxYifWKWH",
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    clientLink: {
      href: "https://...",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                            | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Indicates the response contains a client link object. Will always contain the string `client-link` for this<br/>endpoint. |                                                                                                                       |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The identifier uniquely referring to this client link. Example: `cl_vZCnNQsV2UtfXxYifWKWH`.                           | cl_vZCnNQsV2UtfXxYifWKWH                                                                                              |
| `links`                                                                                                               | [operations.CreateClientLinkLinks](../../models/operations/createclientlinklinks.md)                                  | :heavy_minus_sign:                                                                                                    | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                     |                                                                                                                       |