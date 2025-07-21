# PaymentFee

## Example Usage

```typescript
import { PaymentFee } from "mollie-api-typescript/models/operations";

let value: PaymentFee = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `paymentId`          | *string*             | :heavy_minus_sign:   | N/A                  | tr_5B8cwPMGnU        |
| `paymentDescription` | *string*             | :heavy_minus_sign:   | N/A                  | Payment Description  |