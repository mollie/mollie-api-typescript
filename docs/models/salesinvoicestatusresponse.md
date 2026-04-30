# SalesInvoiceStatusResponse

The status for the invoice to end up in.

A `draft` invoice is not paid or not sent and can be updated after creation. Setting it to `issued` sends it to
the recipient so they may then pay through our payment system. To skip our payment process, set this to `paid` to
mark it as paid. It can then subsequently be sent as well, same as with `issued`.

Dependent parameters:
  - `paymentDetails` is required if invoice should be set directly to `paid`
  - `customerId` and `mandateId` are required if a recurring payment should be used to set the invoice to `paid`
  - `emailDetails` optional for `issued` and `paid` to send the invoice by email

## Example Usage

```typescript
import { SalesInvoiceStatusResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceStatusResponse = "draft";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "issued" | "paid" | Unrecognized<string>
```