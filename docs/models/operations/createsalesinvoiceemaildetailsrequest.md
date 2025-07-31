# CreateSalesInvoiceEmailDetailsRequest

Used when setting an invoice to status of either `issued` or `paid`. Will be used to issue the invoice to the
recipient with the provided `subject` and `body`. Required for `issued` status.

## Example Usage

```typescript
import { CreateSalesInvoiceEmailDetailsRequest } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoiceEmailDetailsRequest = {
  subject: "Your invoice is available",
  body: "Please find your invoice enclosed.",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `subject`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The subject of the email to be sent.                                           | Your invoice is available                                                      |
| `body`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The body of the email to be sent. To add newline characters, you can use `\n`. | Please find your invoice enclosed.                                             |