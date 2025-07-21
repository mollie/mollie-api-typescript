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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `balanceTransactions`                                                            | [operations.BalanceTransaction](../../models/operations/balancetransaction.md)[] | :heavy_minus_sign:                                                               | An array of balance transaction objects.                                         |