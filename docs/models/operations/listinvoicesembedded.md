# ListInvoicesEmbedded

## Example Usage

```typescript
import { ListInvoicesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListInvoicesEmbedded = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `invoices`                                                                                                                                   | [operations.Invoice](../../models/operations/invoice.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                           | An array of invoice objects. For a complete reference of<br/>the invoice object, refer to the [Get invoice endpoint](get-invoice) documentation. |