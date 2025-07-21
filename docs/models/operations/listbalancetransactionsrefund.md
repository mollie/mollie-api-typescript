# ListBalanceTransactionsRefund

## Example Usage

```typescript
import { ListBalanceTransactionsRefund } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsRefund = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
  refundId: "re_5B8cwPMGnU",
  refundDescription: "Refund Description",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `paymentId`          | *string*             | :heavy_minus_sign:   | N/A                  | tr_5B8cwPMGnU        |
| `paymentDescription` | *string*             | :heavy_minus_sign:   | N/A                  | Payment Description  |
| `refundId`           | *string*             | :heavy_minus_sign:   | N/A                  | re_5B8cwPMGnU        |
| `refundDescription`  | *string*             | :heavy_minus_sign:   | N/A                  | Refund Description   |