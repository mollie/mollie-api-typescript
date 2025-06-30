# ListBalanceTransactionsResponse

A list of balance transaction objects.

## Example Usage

```typescript
import { ListBalanceTransactionsResponse } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsResponse = {
  count: 5,
  embedded: {
    balanceTransactions: [
      {
        id: "baltr_QM24QwzUWR4ev4Xfgyt29d",
        type: "payment",
        resultAmount: {
          currency: "EUR",
          value: "10.00",
        },
        initialAmount: {
          currency: "EUR",
          value: "10.00",
        },
        deductions: {
          currency: "EUR",
          value: "10.00",
        },
        context: {
          payment: "tr_aHbjjdrUdm",
          capture: null,
          unauthorizedDirectDebit: "tr_5B8cwPMGnU",
          failedPayment: "tr_5B8cwPMGnU",
          refund: "tr_5B8cwPMGnU",
          returnedRefund: {
            paymentId: "tr_5B8cwPMGnU",
            refundId: "re_5B8cwPMGnU",
          },
          chargeback: {
            paymentId: "tr_5B8cwPMGnU",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
          },
          chargebackReversal: "tr_5B8cwPMGnU",
          outgoingTransfer: {
            transferId: "trf_nyjwa2",
            settlementId: "stl_5B8cwPMGnU",
          },
          canceledOutgoingTransfer: {
            transferId: "trf_nyjwa2",
            settlementId: "stl_5B8cwPMGnU",
          },
          returnedTransfer: {
            transferId: "trf_nyjwa2",
            settlementId: "stl_s3hcSM2hKP",
          },
          invoiceCompensation: "inv_aHbjjdrUdm",
          applicationFee: "tr_5B8cwPMGnU",
          splitPayment: "tr_5B8cwPMGnU",
          platformPaymentRefund: {
            paymentId: "tr_5B8cwPMGnU",
            refundId: "re_5B8cwPMGnU",
          },
          platformPaymentChargeback: {
            paymentId: "tr_5B8cwPMGnU",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
          },
        },
        createdAt: "2024-03-20T09:13:37.0Z",
      },
    ],
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    previous: {
      href: "https://...",
      type: "application/hal+json",
    },
    next: {
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

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListBalanceTransactionsEmbedded](../../models/operations/listbalancetransactionsembedded.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListBalanceTransactionsLinks](../../models/operations/listbalancetransactionslinks.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |