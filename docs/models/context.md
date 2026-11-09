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
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
  captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
  captureDescription: "Capture Description",
  refundId: "re_5B8cwPMGnU",
  refundDescription: "Refund Description",
  chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
  chargebackDescription: "Chargeback Description",
  transferId: "trf_nyjwa2",
  settlementId: "stl_5B8cwPMGnU",
  invoiceId: "inv_aHbjjdrUdm",
  payingOwner: "org_1234567",
  paymentOwner: "org_1234567",
  organizationId: "org_1234567",
  feeType: "feeType",
  feeId: "feeId",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `paymentId`                | *string*                   | :heavy_minus_sign:         | N/A                        | tr_5B8cwPMGnU              |
| `paymentDescription`       | *string*                   | :heavy_minus_sign:         | N/A                        | Payment Description        |
| `captureId`                | *string*                   | :heavy_minus_sign:         | N/A                        | cpt_vytxeTZskVKR7C7WgdSP3d |
| `captureDescription`       | *string*                   | :heavy_minus_sign:         | N/A                        | Capture Description        |
| `refundId`                 | *string*                   | :heavy_minus_sign:         | N/A                        | re_5B8cwPMGnU              |
| `refundDescription`        | *string*                   | :heavy_minus_sign:         | N/A                        | Refund Description         |
| `chargebackId`             | *string*                   | :heavy_minus_sign:         | N/A                        | chb_xFzwUN4ci8HAmSGUACS4J  |
| `chargebackDescription`    | *string*                   | :heavy_minus_sign:         | N/A                        | Chargeback Description     |
| `transferId`               | *string*                   | :heavy_minus_sign:         | N/A                        | trf_nyjwa2                 |
| `settlementId`             | *string*                   | :heavy_minus_sign:         | N/A                        | stl_5B8cwPMGnU             |
| `invoiceId`                | *string*                   | :heavy_minus_sign:         | N/A                        | inv_aHbjjdrUdm             |
| `payingOwner`              | *string*                   | :heavy_minus_sign:         | N/A                        | org_1234567                |
| `paymentOwner`             | *string*                   | :heavy_minus_sign:         | N/A                        | org_1234567                |
| `organizationId`           | *string*                   | :heavy_minus_sign:         | N/A                        | org_1234567                |
| `feeType`                  | *string*                   | :heavy_minus_sign:         | N/A                        | feeType                    |
| `feeId`                    | *string*                   | :heavy_minus_sign:         | N/A                        | feeId                      |