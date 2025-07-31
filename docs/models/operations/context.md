# Context

Depending on the type of the balance transaction, we will try to give more context about the specific event that
triggered it. For example, the context object for a payment transaction will look like
`{"paymentId": "tr_5B8cwPMGnU6qLbRvo7qEZo", "paymentDescription": "Description"}`.

Below is a complete list of the context values that each type of transaction will have.

* Type `payment`: `paymentId`, `paymentDescription`
* Type `capture`: `paymentId` `captureId`, `paymentDescription`, `captureDescription`
* Type `capture-commission`: `paymentId`, `paymentDescription`, `organizationId`
* Type `capture-rolling-reserve-release`: `paymentId`, `paymentDescription`, `captureId`, `captureDescription`
* Type `unauthorized-direct-debit`: `paymentId`, `paymentDescription`
* Type `failed-payment`: `paymentId`, `paymentDescription`
* Type `refund`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
* Type `refund-compensation`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
* Type `returned-refund`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
* Type `returned-refund-compensation`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
* Type `chargeback`: `paymentId` `chargebackId`, `paymentDescription`, `chargebackDescription`
* Type `chargeback-reversal`: `paymentId`, `chargebackId`, `paymentDescription`, `chargebackDescription`
* Type `chargeback-compensation`: `paymentId`, `chargebackId`, `paymentDescription`, `chargebackDescription`
* Type `reversed-chargeback-compensation`: `paymentId`, `chargebackId`, `paymentDescription`, `chargebackDescription`
* Type `outgoing-transfer`: `settlementId` `transferId`
* Type `canceled-outgoing-transfer`: `settlementId` `transferId`
* Type `returned-transfer`: `settlementId` `transferId`
* Type `invoice-compensation`: `invoiceId`
* Type `balance-correction`: none
* Type `application-fee`: `paymentId`, `paymentDescription`, `payingOwner`
* Type `split-payment`: `paymentId`, `paymentDescription`, `paymentOwner`
* Type `platform-payment-refund`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
* Type `returned-platform-payment-refund`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
* Type `platform-payment-chargeback`: `paymentId` `chargebackId`, `paymentDescription`, `chargebackDescription`
* Type `reversed-platform-payment-chargeback`: `paymentId` `chargebackId`, `paymentDescription`, `chargebackDescription`
* Type `payment-commission`: `paymentId`, `paymentDescription`, `organizationId`
* Type `reimbursement-fee`: `paymentId`, `paymentDescription`
* Type `failed-payment-fee`: `paymentId`, `paymentDescription`
* Type `payment-fee`: `paymentId`, `paymentDescription`
* Type `cash-advance-loan`: none
* Type `platform-connected-organizations-fee`: none
* Type `managed-fee`: `feeType`, `<name of the fee>Id`
* Type `returned-managed-fee`:  `feeType`, `<name of the fee>Id`
* Type `topup`: none
* Type `balance-reserve`: none
* Type `balance-reserve-return`: none
* Type `movement`: none
* Type `post-payment-split-payment`: `paymentId`
* Type `cash-collateral-issuance`: none
* Type `cash-collateral-release`: none

## Example Usage

```typescript
import { Context } from "mollie-api-typescript/models/operations";

let value: Context = {
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
  applicationFee: null,
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
  postPaymentSplitPayment: {
    paymentId: "tr_5B8cwPMGnU",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `payment`                                                                                                            | [operations.ListBalanceTransactionsPayment](../../models/operations/listbalancetransactionspayment.md)               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `capture`                                                                                                            | [operations.ListBalanceTransactionsCapture](../../models/operations/listbalancetransactionscapture.md)               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `captureCommision`                                                                                                   | [operations.CaptureCommision](../../models/operations/capturecommision.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `captureRollingReserveRelease`                                                                                       | [operations.CaptureRollingReserveRelease](../../models/operations/capturerollingreserverelease.md)                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `unauthorizedDirectDebit`                                                                                            | [operations.UnauthorizedDirectDebit](../../models/operations/unauthorizeddirectdebit.md)                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `failedPayment`                                                                                                      | [operations.FailedPayment](../../models/operations/failedpayment.md)                                                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `refund`                                                                                                             | [operations.ListBalanceTransactionsRefund](../../models/operations/listbalancetransactionsrefund.md)                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `refundCompensation`                                                                                                 | [operations.RefundCompensation](../../models/operations/refundcompensation.md)                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `returnedRefund`                                                                                                     | [operations.ReturnedRefund](../../models/operations/returnedrefund.md)                                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `returnedRefundCompensation`                                                                                         | [operations.ReturnedRefundCompensation](../../models/operations/returnedrefundcompensation.md)                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `chargeback`                                                                                                         | [operations.ListBalanceTransactionsChargeback](../../models/operations/listbalancetransactionschargeback.md)         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `chargebackReversal`                                                                                                 | [operations.ChargebackReversal](../../models/operations/chargebackreversal.md)                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `chargebackCompensation`                                                                                             | [operations.ChargebackCompensation](../../models/operations/chargebackcompensation.md)                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `reversedChargebackCompensation`                                                                                     | [operations.ReversedChargebackCompensation](../../models/operations/reversedchargebackcompensation.md)               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `outgoingTransfer`                                                                                                   | [operations.OutgoingTransfer](../../models/operations/outgoingtransfer.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `canceledOutgoingTransfer`                                                                                           | [operations.CanceledOutgoingTransfer](../../models/operations/canceledoutgoingtransfer.md)                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `returnedTransfer`                                                                                                   | [operations.ReturnedTransfer](../../models/operations/returnedtransfer.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `invoiceCompensation`                                                                                                | [operations.InvoiceCompensation](../../models/operations/invoicecompensation.md)                                     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `applicationFee`                                                                                                     | [operations.ListBalanceTransactionsApplicationFee](../../models/operations/listbalancetransactionsapplicationfee.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `splitPayment`                                                                                                       | [operations.SplitPayment](../../models/operations/splitpayment.md)                                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `platformPaymentRefund`                                                                                              | [operations.PlatformPaymentRefund](../../models/operations/platformpaymentrefund.md)                                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `returnedPlatformPaymentRefund`                                                                                      | [operations.ReturnedPlatformPaymentRefund](../../models/operations/returnedplatformpaymentrefund.md)                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `platformPaymentChargeback`                                                                                          | [operations.PlatformPaymentChargeback](../../models/operations/platformpaymentchargeback.md)                         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `reversedPlatformPaymentChargeback`                                                                                  | [operations.ReversedPlatformPaymentChargeback](../../models/operations/reversedplatformpaymentchargeback.md)         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `paymentCommission`                                                                                                  | [operations.PaymentCommission](../../models/operations/paymentcommission.md)                                         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `reimbursementFee`                                                                                                   | [operations.ReimbursementFee](../../models/operations/reimbursementfee.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `failedPaymentFee`                                                                                                   | [operations.FailedPaymentFee](../../models/operations/failedpaymentfee.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `paymentFee`                                                                                                         | [operations.PaymentFee](../../models/operations/paymentfee.md)                                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `managedFee`                                                                                                         | [operations.ManagedFee](../../models/operations/managedfee.md)                                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `returnedManagedFee`                                                                                                 | [operations.ReturnedManagedFee](../../models/operations/returnedmanagedfee.md)                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `postPaymentSplitPayment`                                                                                            | [operations.PostPaymentSplitPayment](../../models/operations/postpaymentsplitpayment.md)                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |