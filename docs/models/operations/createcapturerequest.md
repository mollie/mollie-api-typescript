# CreateCaptureRequest

## Example Usage

```typescript
import { CreateCaptureRequest } from "mollie-api-typescript/models/operations";

let value: CreateCaptureRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `paymentId`                                           | *string*                                              | :heavy_check_mark:                                    | Provide the ID of the related payment.                | tr_5B8cwPMGnU                                         |
| `entityCapture`                                       | [models.EntityCapture](../../models/entitycapture.md) | :heavy_minus_sign:                                    | N/A                                                   |                                                       |