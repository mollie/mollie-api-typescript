# EntityUnmatchedCreditTransfer

## Example Usage

```typescript
import { EntityUnmatchedCreditTransfer } from "mollie-api-typescript/models";

let value: EntityUnmatchedCreditTransfer = {
  resource: "unmatched-credit-transfer",
  id: "uct_abcDEFghij123456789",
  profileId: "pfl_5B8cwPMGnU",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  source: {
    format: "iban",
    accountHolderName: "Jan Jansen",
    iban: "NL91ABNA0417164300",
    bic: "ABNANL2A",
  },
  remittanceInformation: {
    unstructured: "",
    references: {
      creditorReference: "RF33678094651239",
      endToEndId: "NOTPROVIDED",
    },
  },
  status: "received",
  createdAt: "2024-03-20T09:13:37+00:00",
  expiresAt: "2024-03-22T09:13:37+00:00",
  paymentIds: [
    "tr_5B8cwPMGnU",
  ],
  links: {
    self: {
      href:
        "https://api.mollie.com/v2/unmatched-credit-transfers/uct_abcDEFghij123456789",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://docs.mollie.com/reference/get-unmatched-credit-transfer",
      type: "text/html",
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Indicates the response contains an unmatched credit transfer object. Will always contain the string<br/>`unmatched-credit-transfer` for this endpoint. | unmatched-credit-transfer                                                                                                                          |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The identifier uniquely referring to this unmatched credit transfer.                                                                               | uct_abcDEFghij123456789                                                                                                                            |
| `profileId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                | pfl_5B8cwPMGnU                                                                                                                                     |
| `amount`                                                                                                                                           | [models.Amount](../models/amount.md)                                                                                                               | :heavy_check_mark:                                                                                                                                 | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                                                  |                                                                                                                                                    |
| `source`                                                                                                                                           | [models.EntityUnmatchedCreditTransferSource](../models/entityunmatchedcredittransfersource.md)                                                     | :heavy_check_mark:                                                                                                                                 | Details about the sender of the credit transfer.                                                                                                   |                                                                                                                                                    |
| `remittanceInformation`                                                                                                                            | [models.EntityUnmatchedCreditTransferRemittanceInformation](../models/entityunmatchedcredittransferremittanceinformation.md)                       | :heavy_check_mark:                                                                                                                                 | Remittance information provided with the unmatched credit transfer.                                                                                |                                                                                                                                                    |
| `status`                                                                                                                                           | [models.UnmatchedCreditTransferStatus](../models/unmatchedcredittransferstatus.md)                                                                 | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                | received                                                                                                                                           |
| `createdAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.                                              | 2024-03-20T09:13:37+00:00                                                                                                                          |
| `expiresAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The date and time at which the unmatched credit transfer expires, in<br/>[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.                | 2024-03-22T09:13:37+00:00                                                                                                                          |
| `paymentIds`                                                                                                                                       | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | The IDs of the payments this credit transfer was matched to. Only present when the status is `matched`.                                            |                                                                                                                                                    |
| `links`                                                                                                                                            | [models.EntityUnmatchedCreditTransferLinks](../models/entityunmatchedcredittransferlinks.md)                                                       | :heavy_check_mark:                                                                                                                                 | Links to related resources.                                                                                                                        |                                                                                                                                                    |