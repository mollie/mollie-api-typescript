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
          payment: null,
          capture: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
            captureDescription: "Capture Description",
          },
          captureCommision: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
            captureDescription: "Capture Description",
          },
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
          returnedRefund: null,
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
          outgoingTransfer: null,
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
          splitPayment: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            paymentOnwer: "org_1234567",
          },
          platformPaymentRefund: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            refundId: "re_5B8cwPMGnU",
            refundDescription: "Refund Description",
          },
          returnedPlatformPaymentRefund: {
            paymentId: "tr_5B8cwPMGnU",
            paymentDescription: "Payment Description",
            refundId: "re_5B8cwPMGnU",
            refundDescription: "Refund Description",
          },
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
          returnedManagedFee: {
            feeType: "feeType",
            feeId: "feeId",
          },
          postPaymentSplitPayment: null,
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListBalanceTransactionsEmbedded](../../models/operations/listbalancetransactionsembedded.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListBalanceTransactionsLinks](../../models/operations/listbalancetransactionslinks.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |