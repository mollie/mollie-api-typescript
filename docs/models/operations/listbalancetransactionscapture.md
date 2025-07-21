# ListBalanceTransactionsCapture

## Example Usage

```typescript
import { ListBalanceTransactionsCapture } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsCapture = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
  captureId: "cpt_vytxeTZskVKR7C7WgdSP3d",
  captureDescription: "Capture Description",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `paymentId`                | *string*                   | :heavy_minus_sign:         | N/A                        | tr_5B8cwPMGnU              |
| `paymentDescription`       | *string*                   | :heavy_minus_sign:         | N/A                        | Payment Description        |
| `captureId`                | *string*                   | :heavy_minus_sign:         | N/A                        | cpt_vytxeTZskVKR7C7WgdSP3d |
| `captureDescription`       | *string*                   | :heavy_minus_sign:         | N/A                        | Capture Description        |