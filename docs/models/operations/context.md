# Context

Depending on the type of the balance transaction, we will try to give more context about the specific event that triggered it. For example, the context object for a payment transaction will look like `{"paymentId": "tr_5B8cwPMGnU6qLbRvo7qEZo"}`.

Below is a complete list of the context values that each type of transaction will have.

* Type `payment`: `paymentId`
* Type `capture`: `paymentId` `captureId`
* Type `unauthorized-direct-debit`: `paymentId`
* Type `failed-payment`: `paymentId`
* Type `refund`: `paymentId` `refundId`
* Type `returned-refund`: `paymentId` `refundId`
* Type `chargeback`: `paymentId` `chargebackId`
* Type `chargeback-reversal`: `paymentId`
* Type `outgoing-transfer`: `settlementId` `transferId`
* Type `canceled-outgoing-transfer`: `settlementId` `transferId`
* Type `returned-transfer`: `settlementId` `transferId`
* Type `invoice-compensation`: `invoiceId`
* Type `balance-correction`: none
* Type `application-fee`: `paymentId`
* Type `split-payment`: `paymentId`
* Type `platform-payment-refund`: `paymentId` `refundId`
* Type `platform-payment-chargeback`: `paymentId` `chargebackId`

## Example Usage

```typescript
import { Context } from "mollie-api-typescript/models/operations";

let value: Context = {
  payment: "tr_aHbjjdrUdm",
  capture: {
    paymentId: "tr_5B8cwPMGnU",
    captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
  },
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `payment`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_aHbjjdrUdm                                                                                                |
| `capture`                                                                                                    | [operations.ListBalanceTransactionsCapture](../../models/operations/listbalancetransactionscapture.md)       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `unauthorizedDirectDebit`                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_5B8cwPMGnU                                                                                                |
| `failedPayment`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_5B8cwPMGnU                                                                                                |
| `refund`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_5B8cwPMGnU                                                                                                |
| `returnedRefund`                                                                                             | [operations.ReturnedRefund](../../models/operations/returnedrefund.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `chargeback`                                                                                                 | [operations.ListBalanceTransactionsChargeback](../../models/operations/listbalancetransactionschargeback.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `chargebackReversal`                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_5B8cwPMGnU                                                                                                |
| `outgoingTransfer`                                                                                           | [operations.OutgoingTransfer](../../models/operations/outgoingtransfer.md)                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `canceledOutgoingTransfer`                                                                                   | [operations.CanceledOutgoingTransfer](../../models/operations/canceledoutgoingtransfer.md)                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `returnedTransfer`                                                                                           | [operations.ReturnedTransfer](../../models/operations/returnedtransfer.md)                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `invoiceCompensation`                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | inv_aHbjjdrUdm                                                                                               |
| `applicationFee`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_5B8cwPMGnU                                                                                                |
| `splitPayment`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | tr_5B8cwPMGnU                                                                                                |
| `platformPaymentRefund`                                                                                      | [operations.PlatformPaymentRefund](../../models/operations/platformpaymentrefund.md)                         | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `platformPaymentChargeback`                                                                                  | [operations.PlatformPaymentChargeback](../../models/operations/platformpaymentchargeback.md)                 | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |