# ListPaymentsCardVerificationMethod

The method used to verify the cardholder's identity.

## Example Usage

```typescript
import { ListPaymentsCardVerificationMethod } from "mollie-api-typescript/models/operations";

let value: ListPaymentsCardVerificationMethod = "no-cvm-required";
```

## Values

```typescript
"no-cvm-required" | "online-pin" | "offline-pin" | "consumer-device" | "signature" | "signature-and-online-pin" | "online-pin-and-signature" | "none" | "failed"
```