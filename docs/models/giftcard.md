# Giftcard

## Example Usage

```typescript
import { Giftcard } from "mollie-api-typescript/models";

let value: Giftcard = {
  resource: "issuer",
  id: "festivalcadeau",
  description: "FestivalCadeau Giftcard",
  status: "activated",
  links: {
    self: {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Indicates the response contains a payment method issuer object. Will always contain the string `issuer` for this<br/>endpoint. | issuer                                                                                                                     |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The unique identifier of the payment method issuer.                                                                        | festivalcadeau                                                                                                             |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The full name of the payment method issuer.                                                                                | FestivalCadeau Giftcard                                                                                                    |
| `status`                                                                                                                   | [models.GiftcardStatus](../models/giftcardstatus.md)                                                                       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | activated                                                                                                                  |
| `links`                                                                                                                    | [models.GiftcardLinks](../models/giftcardlinks.md)                                                                         | :heavy_check_mark:                                                                                                         | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                          |                                                                                                                            |