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
import { Context } from "mollie-api-typescript/models";

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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `payment`                                                                                            | [models.Payment](../models/payment.md)                                                               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `capture`                                                                                            | [models.Capture](../models/capture.md)                                                               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `captureCommision`                                                                                   | [models.CaptureCommision](../models/capturecommision.md)                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `captureRollingReserveRelease`                                                                       | [models.CaptureRollingReserveRelease](../models/capturerollingreserverelease.md)                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `unauthorizedDirectDebit`                                                                            | [models.UnauthorizedDirectDebit](../models/unauthorizeddirectdebit.md)                               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `failedPayment`                                                                                      | [models.FailedPayment](../models/failedpayment.md)                                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `refund`                                                                                             | [models.Refund](../models/refund.md)                                                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `refundCompensation`                                                                                 | [models.RefundCompensation](../models/refundcompensation.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `returnedRefund`                                                                                     | [models.ReturnedRefund](../models/returnedrefund.md)                                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `returnedRefundCompensation`                                                                         | [models.ReturnedRefundCompensation](../models/returnedrefundcompensation.md)                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `chargeback`                                                                                         | [models.Chargeback](../models/chargeback.md)                                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `chargebackReversal`                                                                                 | [models.ChargebackReversal](../models/chargebackreversal.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `chargebackCompensation`                                                                             | [models.ChargebackCompensation](../models/chargebackcompensation.md)                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `reversedChargebackCompensation`                                                                     | [models.ReversedChargebackCompensation](../models/reversedchargebackcompensation.md)                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `outgoingTransfer`                                                                                   | [models.OutgoingTransfer](../models/outgoingtransfer.md)                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `canceledOutgoingTransfer`                                                                           | [models.CanceledOutgoingTransfer](../models/canceledoutgoingtransfer.md)                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `returnedTransfer`                                                                                   | [models.ReturnedTransfer](../models/returnedtransfer.md)                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `invoiceCompensation`                                                                                | [models.InvoiceCompensation](../models/invoicecompensation.md)                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `applicationFee`                                                                                     | [models.EntityBalanceTransactionApplicationFee](../models/entitybalancetransactionapplicationfee.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `splitPayment`                                                                                       | [models.SplitPayment](../models/splitpayment.md)                                                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `platformPaymentRefund`                                                                              | [models.PlatformPaymentRefund](../models/platformpaymentrefund.md)                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `returnedPlatformPaymentRefund`                                                                      | [models.ReturnedPlatformPaymentRefund](../models/returnedplatformpaymentrefund.md)                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `platformPaymentChargeback`                                                                          | [models.PlatformPaymentChargeback](../models/platformpaymentchargeback.md)                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `reversedPlatformPaymentChargeback`                                                                  | [models.ReversedPlatformPaymentChargeback](../models/reversedplatformpaymentchargeback.md)           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `paymentCommission`                                                                                  | [models.PaymentCommission](../models/paymentcommission.md)                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `reimbursementFee`                                                                                   | [models.ReimbursementFee](../models/reimbursementfee.md)                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `failedPaymentFee`                                                                                   | [models.FailedPaymentFee](../models/failedpaymentfee.md)                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `paymentFee`                                                                                         | [models.PaymentFee](../models/paymentfee.md)                                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `managedFee`                                                                                         | [models.ManagedFee](../models/managedfee.md)                                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `returnedManagedFee`                                                                                 | [models.ReturnedManagedFee](../models/returnedmanagedfee.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `postPaymentSplitPayment`                                                                            | [models.PostPaymentSplitPayment](../models/postpaymentsplitpayment.md)                               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |