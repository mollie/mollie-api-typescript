# SplitPayment

## Example Usage

```typescript
import { SplitPayment } from "mollie-api-typescript/models";

let value: SplitPayment = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
  paymentOnwer: "org_1234567",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `paymentId`          | *string*             | :heavy_minus_sign:   | N/A                  | tr_5B8cwPMGnU        |
| `paymentDescription` | *string*             | :heavy_minus_sign:   | N/A                  | Payment Description  |
| `paymentOnwer`       | *string*             | :heavy_minus_sign:   | N/A                  | org_1234567          |