# PaymentDetailsReceiptCardVerificationMethodResponse

The method used to verify the cardholder's identity.

## Example Usage

```typescript
import { PaymentDetailsReceiptCardVerificationMethodResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsReceiptCardVerificationMethodResponse =
  "no-cvm-required";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"no-cvm-required" | "online-pin" | "offline-pin" | "consumer-device" | "signature" | "signature-and-online-pin" | "online-pin-and-signature" | "none" | "failed" | Unrecognized<string>
```