# PaymentDetailsQrCode

**Optional include.** If a QR code was requested during payment creation for a QR-compatible payment method,
the QR code details will be available in this object.

The QR code can be scanned by the customer to complete the payment on their mobile device. For example,
Bancontact QR payments can be completed by the customer using the Bancontact app.

* `height` _integer_
* `width` _integer_
* `src` _string_

## Example Usage

```typescript
import { PaymentDetailsQrCode } from "mollie-api-typescript/models";

let value: PaymentDetailsQrCode = {
  height: 300,
  width: 300,
  src: "https://www.mollie.com/images/qr-code.png",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `height`                                   | *number*                                   | :heavy_minus_sign:                         | The height of the QR code image in pixels. | 300                                        |
| `width`                                    | *number*                                   | :heavy_minus_sign:                         | The width of the QR code image in pixels.  | 300                                        |
| `src`                                      | *string*                                   | :heavy_minus_sign:                         | The URL to the QR code image.              | https://www.mollie.com/images/qr-code.png  |