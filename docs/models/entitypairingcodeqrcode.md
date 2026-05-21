# EntityPairingCodeQrCode

The QR code representation of the pairing code.

## Example Usage

```typescript
import { EntityPairingCodeQrCode } from "mollie-api-typescript/models";

let value: EntityPairingCodeQrCode = {
  height: 256,
  width: 256,
  src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4w...",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `height`                                              | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   | 256                                                   |
| `width`                                               | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   | 256                                                   |
| `src`                                                 | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   | data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4w... |