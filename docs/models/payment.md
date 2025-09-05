# Payment

## Example Usage

```typescript
import { Payment } from "mollie-api-typescript/models";

let value: Payment = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `paymentId`          | *string*             | :heavy_minus_sign:   | N/A                  | tr_5B8cwPMGnU        |
| `paymentDescription` | *string*             | :heavy_minus_sign:   | N/A                  | Payment Description  |