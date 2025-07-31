# CreateSalesInvoicePaymentDetailsRequest

Used when setting an invoice to status of `paid`, and will store a payment that fully pays the invoice with the
provided details. Required for `paid` status.

## Example Usage

```typescript
import { CreateSalesInvoicePaymentDetailsRequest } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoicePaymentDetailsRequest = {
  source: "payment-link",
  sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                            | [operations.CreateSalesInvoiceSourceRequest](../../models/operations/createsalesinvoicesourcerequest.md)            | :heavy_check_mark:                                                                                                  | The way through which the invoice is to be set to paid.                                                             | payment-link                                                                                                        |
| `sourceReference`                                                                                                   | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | A reference to the payment the sales invoice is paid by. Required for `source` values `payment-link` and<br/>`payment`. | pl_d9fQur83kFdhH8hIhaZfq                                                                                            |