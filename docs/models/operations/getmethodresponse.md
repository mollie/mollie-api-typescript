# GetMethodResponse

The payment method object.

## Example Usage

```typescript
import { GetMethodResponse } from "mollie-api-typescript/models/operations";

let value: GetMethodResponse = {
  resource: "method",
  id: "ideal",
  description: "iDeal",
  minimumAmount: {
    currency: "EUR",
    value: "10.00",
  },
  maximumAmount: {
    currency: "EUR",
    value: "10.00",
  },
  image: {
    size1x: "https://...",
    size2x: "https://...",
    svg: "https://...",
  },
  status: "activated",
  issuers: [
    {
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
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Indicates the response contains a payment method object. Will always contain the string `method` for this<br/>endpoint.                                         | method                                                                                                                                                          |
| `id`                                                                                                                                                            | [operations.GetMethodId](../../models/operations/getmethodid.md)                                                                                                | :heavy_check_mark:                                                                                                                                              | The unique identifier of the payment method. When used during [payment creation](create-payment), the payment<br/>method selection screen will be skipped.      | ideal                                                                                                                                                           |
| `description`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The full name of the payment method.<br/><br/>If a `locale` parameter is provided, the name is translated to the given locale if possible.                      | iDeal                                                                                                                                                           |
| `minimumAmount`                                                                                                                                                 | [operations.GetMethodMinimumAmount](../../models/operations/getmethodminimumamount.md)                                                                          | :heavy_check_mark:                                                                                                                                              | The minimum payment amount required to use this payment method.                                                                                                 |                                                                                                                                                                 |
| `maximumAmount`                                                                                                                                                 | [operations.GetMethodMaximumAmount](../../models/operations/getmethodmaximumamount.md)                                                                          | :heavy_check_mark:                                                                                                                                              | The maximum payment amount allowed when using this payment method. If there is no method-specific maximum, `null`<br/>is returned instead.                      |                                                                                                                                                                 |
| `image`                                                                                                                                                         | [operations.GetMethodImage](../../models/operations/getmethodimage.md)                                                                                          | :heavy_check_mark:                                                                                                                                              | URLs of images representing the payment method.                                                                                                                 |                                                                                                                                                                 |
| `status`                                                                                                                                                        | [operations.GetMethodStatus](../../models/operations/getmethodstatus.md)                                                                                        | :heavy_check_mark:                                                                                                                                              | The payment method's activation status for this profile.                                                                                                        | activated                                                                                                                                                       |
| `issuers`                                                                                                                                                       | [operations.GetMethodIssuer](../../models/operations/getmethodissuer.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                              | **Optional include.** Array of objects for each 'issuer' that is available for this payment method. Only relevant<br/>for iDEAL, KBC/CBC, gift cards, and vouchers. |                                                                                                                                                                 |
| `links`                                                                                                                                                         | [operations.GetMethodLinks](../../models/operations/getmethodlinks.md)                                                                                          | :heavy_check_mark:                                                                                                                                              | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                                                               |                                                                                                                                                                 |