# Embedded

Full payload of the event.

## Example Usage

```typescript
import { Embedded } from "mollie-api-typescript/models";

let value: Embedded = {
  entity: {
    resource: "business-account-transfer",
    id: "batrf_87GByBuj4UCcUTEbs6aGJ",
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
    businessAccountTransactionId: "batr_87GByBuj4UCcUTEbs6aGJ",
    transferScheme: {
      type: "sepa-credit-inst",
    },
    creditDebitIndicator: "debit",
    status: "initiated",
    statusHistory: [
      {
        status: "initiated",
        createdAt: "2024-03-20T09:13:37+00:00",
        statusReason: {
          code: "insufficient-funds",
          message: "The creditor account does not exist.",
        },
      },
    ],
    createdAt: "2024-03-20T09:13:37+00:00",
    statusReason: {
      code: "insufficient-funds",
      message: "The creditor account does not exist.",
    },
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `entity`           | *models.Entity*    | :heavy_minus_sign: | N/A                |