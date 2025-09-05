# PaymentCommission

## Example Usage

```typescript
import { PaymentCommission } from "mollie-api-typescript/models";

let value: PaymentCommission = {
  paymentId: "tr_5B8cwPMGnU",
  paymentDescription: "Payment Description",
  organizationId: "org_1234567",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `paymentId`          | *string*             | :heavy_minus_sign:   | N/A                  | tr_5B8cwPMGnU        |
| `paymentDescription` | *string*             | :heavy_minus_sign:   | N/A                  | Payment Description  |
| `organizationId`     | *string*             | :heavy_minus_sign:   | N/A                  | org_1234567          |