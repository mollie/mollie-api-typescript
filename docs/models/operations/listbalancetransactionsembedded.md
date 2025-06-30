# ListBalanceTransactionsEmbedded

## Example Usage

```typescript
import { ListBalanceTransactionsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsEmbedded = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `balanceTransactions`                                                            | [operations.BalanceTransaction](../../models/operations/balancetransaction.md)[] | :heavy_minus_sign:                                                               | An array of balance transaction objects.                                         |