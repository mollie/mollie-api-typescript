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
        resource: "balance-transaction",
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
          payment: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
          },
          capture: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
            captureDescription: "Capture Description",
          },
          captureCommision: null,
          captureRollingReserveRelease: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
            captureDescription: "Capture Description",
          },
          unauthorizedDirectDebit: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
          },
          failedPayment: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
          },
          refund: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            refundId: "re_5B8cwPMGnU",
            refundDescription: "Refund Description",
          },
          refundCompensation: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            refundId: "re_5B8cwPMGnU",
            refundDescription: "Refund Description",
          },
          returnedRefund: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            refundId: "re_5B8cwPMGnU",
            refundDescription: "Refund Description",
          },
          returnedRefundCompensation: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            refundId: "re_5B8cwPMGnU",
            refundDescription: "Refund Description",
          },
          chargeback: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
            chargebackDescription: "Chargeback Description",
          },
          chargebackReversal: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
            chargebackDescription: "Chargeback Description",
          },
          chargebackCompensation: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
            chargebackDescription: "Chargeback Description",
          },
          reversedChargebackCompensation: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
            chargebackDescription: "Chargeback Description",
          },
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
          invoiceCompensation: {
            invoiceId: "inv_aHbjjdrUdm",
          },
          applicationFee: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            payingOwner: "org_1234567",
          },
          splitPayment: null,
          platformPaymentRefund: null,
          returnedPlatformPaymentRefund: null,
          platformPaymentChargeback: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
            chargebackDescription: "Chargeback Description",
          },
          reversedPlatformPaymentChargeback: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
            chargebackDescription: "Chargeback Description",
          },
          paymentCommission: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            organizationId: "org_1234567",
          },
          reimbursementFee: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
          },
          failedPaymentFee: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
          },
          paymentFee: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
          },
          managedFee: {
            feeType: "feeType",
            feeId: "feeId",
          },
          returnedManagedFee: null,
          postPaymentSplitPayment: {
            paymentId: "tr_5B8cwPMGnU",
          },
        },
        createdAt: "2024-03-20T09:13:37+00:00",
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListBalanceTransactionsEmbedded](../../models/operations/listbalancetransactionsembedded.md)                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |