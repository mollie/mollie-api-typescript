# PlatformPaymentRefund

## Example Usage

```typescript
import { PlatformPaymentRefund } from "mollie-api-typescript/models/operations";

let value: PlatformPaymentRefund = {
  paymentId: "tr_5B8cwPMGnU",
  refundId: "re_5B8cwPMGnU",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentId`        | *string*           | :heavy_minus_sign: | N/A                | tr_5B8cwPMGnU      |
| `refundId`         | *string*           | :heavy_minus_sign: | N/A                | re_5B8cwPMGnU      |