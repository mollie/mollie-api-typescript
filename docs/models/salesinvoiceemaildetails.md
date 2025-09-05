# SalesInvoiceEmailDetails

## Example Usage

```typescript
import { SalesInvoiceEmailDetails } from "mollie-api-typescript/models";

let value: SalesInvoiceEmailDetails = {
  subject: "Your invoice is available",
  body: "Please find your invoice enclosed.",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `subject`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The subject of the email to be sent.                                           | Your invoice is available                                                      |
| `body`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The body of the email to be sent. To add newline characters, you can use `\n`. | Please find your invoice enclosed.                                             |