# ReversedChargebackCompensation

## Example Usage

```typescript
import { ReversedChargebackCompensation } from "mollie-api-typescript/models/operations";

let value: ReversedChargebackCompensation = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
  chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
  chargebackDescription: "Chargeback Description",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `paymentId`               | *string*                  | :heavy_minus_sign:        | N/A                       | tr_5B8cwPMGnU             |
| `paymentDescription`      | *string*                  | :heavy_minus_sign:        | N/A                       | Payment Description       |
| `chargebackId`            | *string*                  | :heavy_minus_sign:        | N/A                       | chb_xFzwUN4ci8HAmSGUACS4J |
| `chargebackDescription`   | *string*                  | :heavy_minus_sign:        | N/A                       | Chargeback Description    |