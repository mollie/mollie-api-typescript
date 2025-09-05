# EntityChargeback

## Example Usage

```typescript
import { EntityChargeback } from "mollie-api-typescript/models";

let value: EntityChargeback = {
  resource: "chargeback",
  id: "chb_xFzwUN4ci8HAmSGUACS4J",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  settlementAmount: {
    currency: "EUR",
    value: "10.00",
  },
  reason: {
    code: "AC01",
    description: "Account identifier incorrect (i.e. invalid IBAN)",
  },
  paymentId: "tr_5B8cwPMGnU",
  settlementId: "stl_5B8cwPMGnU",
  createdAt: "2024-03-20T09:13:37.0Z",
  reversedAt: "2024-03-21T09:13:37.0Z",
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    payment: {
      href: "https://...",
      type: "application/hal+json",
    },
    settlement: {
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
| `resource`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Indicates the response contains a chargeback object. Will always contain the string `chargeback` for this<br/>endpoint.    | chargeback                                                                                                                 |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | chb_xFzwUN4ci8HAmSGUACS4J                                                                                                  |
| `amount`                                                                                                                   | [models.Amount](../models/amount.md)                                                                                       | :heavy_check_mark:                                                                                                         | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                          |                                                                                                                            |
| `settlementAmount`                                                                                                         | [models.AmountNullable](../models/amountnullable.md)                                                                       | :heavy_minus_sign:                                                                                                         | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                          |                                                                                                                            |
| `reason`                                                                                                                   | [models.Reason](../models/reason.md)                                                                                       | :heavy_minus_sign:                                                                                                         | Reason for the chargeback as given by the bank. Only available for chargebacks of SEPA Direct Debit payments.              |                                                                                                                            |
| `paymentId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | tr_5B8cwPMGnU                                                                                                              |
| `settlementId`                                                                                                             | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | stl_5B8cwPMGnU                                                                                                             |
| `createdAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.                      | 2024-03-20T09:13:37.0Z                                                                                                     |
| `reversedAt`                                                                                                               | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The date and time the chargeback was reversed if applicable, in<br/>[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. | 2024-03-21T09:13:37.0Z                                                                                                     |
| `links`                                                                                                                    | [models.EntityChargebackLinks](../models/entitychargebacklinks.md)                                                         | :heavy_check_mark:                                                                                                         | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                          |                                                                                                                            |