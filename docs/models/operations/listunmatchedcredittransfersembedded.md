# ListUnmatchedCreditTransfersEmbedded

## Example Usage

```typescript
import { ListUnmatchedCreditTransfersEmbedded } from "mollie-api-typescript/models/operations";

let value: ListUnmatchedCreditTransfersEmbedded = {
  unmatchedCreditTransfers: [
    {
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
      },
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `unmatchedCreditTransfers`                                                                      | [models.ListEntityUnmatchedCreditTransfer](../../models/listentityunmatchedcredittransfer.md)[] | :heavy_check_mark:                                                                              | An array of unmatched credit transfer objects.                                                  |