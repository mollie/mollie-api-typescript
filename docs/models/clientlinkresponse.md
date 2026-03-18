# ClientLinkResponse

## Example Usage

```typescript
import { ClientLinkResponse } from "mollie-api-typescript/models";

let value: ClientLinkResponse = {
  resource: "client-link",
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
| `resource`                                                                                                            | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Indicates the response contains a client link object. Will always contain the string `client-link` for this<br/>endpoint. | client-link                                                                                                           |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The identifier uniquely referring to this client link. Example: `cl_vZCnNQsV2UtfXxYifWKWH`.                           | cl_vZCnNQsV2UtfXxYifWKWH                                                                                              |
| `links`                                                                                                               | [models.ClientLinkResponseLinks](../models/clientlinkresponselinks.md)                                                | :heavy_check_mark:                                                                                                    | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                     |                                                                                                                       |