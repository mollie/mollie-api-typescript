# PlatformPaymentChargeback

## Example Usage

```typescript
import { PlatformPaymentChargeback } from "mollie-api-typescript/models/operations";

let value: PlatformPaymentChargeback = {
  paymentId: "tr_5B8cwPMGnU",
  chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `paymentId`               | *string*                  | :heavy_minus_sign:        | N/A                       | tr_5B8cwPMGnU             |
| `chargebackId`            | *string*                  | :heavy_minus_sign:        | N/A                       | chb_xFzwUN4ci8HAmSGUACS4J |