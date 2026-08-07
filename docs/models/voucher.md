# Voucher

## Example Usage

```typescript
import { Voucher } from "mollie-api-typescript/models";

let value: Voucher = {
  resource: "issuer",
  id: "edenred-belgium-eco",
  name: "Edenred Eco",
  image: {
    size1x: "https://...",
    size2x: "https://...",
    svg: "https://...",
  },
  status: "activated",
  contractor: {
    id: "Apetiz",
    name: "Apetiz",
    contractId: "someContractId",
  },
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
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The unique identifier of the payment method issuer.                                                                        | edenred-belgium-eco                                                                                                        |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The full name of the payment method issuer.                                                                                | Edenred Eco                                                                                                                |
| `image`                                                                                                                    | [models.VoucherImage](../models/voucherimage.md)                                                                           | :heavy_check_mark:                                                                                                         | URLs of images representing the payment method issuer.                                                                     |                                                                                                                            |
| `status`                                                                                                                   | [models.VoucherStatus](../models/voucherstatus.md)                                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | activated                                                                                                                  |
| `contractor`                                                                                                               | [models.Contractor](../models/contractor.md)                                                                               | :heavy_check_mark:                                                                                                         | Information regarding the *contractor*. Only relevant for `voucher` issuers.                                               |                                                                                                                            |
| `links`                                                                                                                    | [models.VoucherLinks](../models/voucherlinks.md)                                                                           | :heavy_check_mark:                                                                                                         | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                          |                                                                                                                            |