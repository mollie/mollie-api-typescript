# ListDraftTransfersEmbedded

## Example Usage

```typescript
import { ListDraftTransfersEmbedded } from "mollie-api-typescript/models/operations";
import { RFCDate } from "mollie-api-typescript/types";

let value: ListDraftTransfersEmbedded = {
  draftTransfers: [
    {
      resource: "business-account-draft-transfer",
      id: "badrt_87GByBuj4UCcUTEbs6aGJ",
      mode: "live",
      debtor: {
        fullName: "Jan Jansen",
        account: {
          iban: "NL02ABNA0123456789",
        },
      },
      creditor: {
        fullName: "Jan Jansen",
        account: {
          iban: "NL02ABNA0123456789",
        },
      },
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "Invoice 12345",
      scheduledExecutionDate: new RFCDate("2025-03-01"),
      status: "pending-review",
      statusReason: {
        code: "deleted-by-creator",
        message:
          "The draft transfer has been deleted by the user who created it",
      },
      createdAt: "2024-03-20T09:13:37+00:00",
      approvedAt: "2025-01-01T12:05:00+00:00",
      declinedAt: "2025-01-01T12:05:00+00:00",
      deletedAt: "2025-01-01T12:05:00+00:00",
      links: {
        self: {
          href:
            "https://api.mollie.com/v2/business-accounts/draft-transfers/badrt_87GByBuj4UCcUTEbs6aGJ",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `draftTransfers`                                                                | [models.ListDraftTransferResponse](../../models/listdrafttransferresponse.md)[] | :heavy_check_mark:                                                              | An array of draft transfer objects.                                             |