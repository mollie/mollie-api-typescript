# ReturnedRefund

## Example Usage

```typescript
import { ReturnedRefund } from "mollie-api-typescript/models/operations";

let value: ReturnedRefund = {
  paymentId: "tr_5B8cwPMGnU",
  refundId: "re_5B8cwPMGnU",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentId`        | *string*           | :heavy_minus_sign: | N/A                | tr_5B8cwPMGnU      |
| `refundId`         | *string*           | :heavy_minus_sign: | N/A                | re_5B8cwPMGnU      |