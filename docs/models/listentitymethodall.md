# ListEntityMethodAll

## Example Usage

```typescript
import { ListEntityMethodAll } from "mollie-api-typescript/models";

let value: ListEntityMethodAll = {
  resource: "method",
  id: "ideal",
  description: "iDeal",
  minimumAmount: {
    currency: "EUR",
    value: "10.00",
  },
  maximumAmount: null,
  image: {
    size1x: "https://...",
    size2x: "https://...",
    svg: "https://...",
  },
  status: "activated",
  issuers: [
    {
      resource: "issuer",
      id: "ideal_ABNANL2A",
      name: "ING Bank",
      image: {
        size1x: "https://...",
        size2x: "https://...",
        svg: "https://...",
      },
    },
  ],
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
  pricing: [
    {
      description: "The Netherlands",
      fixed: {
        currency: "EUR",
        value: "10.00",
      },
      variable: "0",
      feeRegion: "other",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Indicates the response contains a payment method object. Will always contain the string `method` for this<br/>endpoint.                                         | method                                                                                                                                                          |
| `id`                                                                                                                                                            | [models.ListEntityMethodAllId](../models/listentitymethodallid.md)                                                                                              | :heavy_check_mark:                                                                                                                                              | The unique identifier of the payment method. When used during [payment creation](create-payment), the payment<br/>method selection screen will be skipped.      | ideal                                                                                                                                                           |
| `description`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The full name of the payment method.<br/><br/>If a `locale` parameter is provided, the name is translated to the given locale if possible.                      | iDeal                                                                                                                                                           |
| `minimumAmount`                                                                                                                                                 | [models.ListEntityMethodAllMinimumAmount](../models/listentitymethodallminimumamount.md)                                                                        | :heavy_check_mark:                                                                                                                                              | The minimum payment amount required to use this payment method.                                                                                                 |                                                                                                                                                                 |
| `maximumAmount`                                                                                                                                                 | [models.ListEntityMethodAllMaximumAmount](../models/listentitymethodallmaximumamount.md)                                                                        | :heavy_check_mark:                                                                                                                                              | The maximum payment amount allowed when using this payment method. If there is no method-specific maximum, `null`<br/>is returned instead.                      |                                                                                                                                                                 |
| `image`                                                                                                                                                         | [models.ListEntityMethodAllImage](../models/listentitymethodallimage.md)                                                                                        | :heavy_check_mark:                                                                                                                                              | URLs of images representing the payment method.                                                                                                                 |                                                                                                                                                                 |
| `status`                                                                                                                                                        | [models.MethodStatus](../models/methodstatus.md)                                                                                                                | :heavy_check_mark:                                                                                                                                              | The payment method's activation status for this profile.                                                                                                        | activated                                                                                                                                                       |
| `issuers`                                                                                                                                                       | [models.ListEntityMethodAllIssuer](../models/listentitymethodallissuer.md)[]                                                                                    | :heavy_minus_sign:                                                                                                                                              | **Optional include.** Array of objects for each 'issuer' that is available for this payment method. Only relevant<br/>for iDEAL, KBC/CBC, gift cards, and vouchers. |                                                                                                                                                                 |
| `links`                                                                                                                                                         | [models.ListEntityMethodAllLinks](../models/listentitymethodalllinks.md)                                                                                        | :heavy_check_mark:                                                                                                                                              | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                                                               |                                                                                                                                                                 |
| `pricing`                                                                                                                                                       | [models.Pricing](../models/pricing.md)[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | **Optional include.** Array of objects describing the pricing configuration applicable for this payment method on<br/>your account.                             |                                                                                                                                                                 |