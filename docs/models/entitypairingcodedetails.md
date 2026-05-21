# EntityPairingCodeDetails

Additional pairing code data, present only when requested via the `include` parameter.

## Example Usage

```typescript
import { EntityPairingCodeDetails } from "mollie-api-typescript/models";

let value: EntityPairingCodeDetails = {
  qrCode: {
    height: 256,
    width: 256,
    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4w...",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `qrCode`                                                               | [models.EntityPairingCodeQrCode](../models/entitypairingcodeqrcode.md) | :heavy_minus_sign:                                                     | The QR code representation of the pairing code.                        |