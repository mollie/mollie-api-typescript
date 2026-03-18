# SalesInvoicePaymentDetailsResponse

## Example Usage

```typescript
import { SalesInvoicePaymentDetailsResponse } from "mollie-api-typescript/models";

let value: SalesInvoicePaymentDetailsResponse = {
  source: "payment-link",
  sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                            | [models.SalesInvoicePaymentDetailsSourceResponse](../models/salesinvoicepaymentdetailssourceresponse.md)            | :heavy_check_mark:                                                                                                  | The way through which the invoice is to be set to paid.                                                             | payment-link                                                                                                        |
| `sourceReference`                                                                                                   | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | A reference to the payment the sales invoice is paid by. Required for `source` values `payment-link` and<br/>`payment`. | pl_d9fQur83kFdhH8hIhaZfq                                                                                            |