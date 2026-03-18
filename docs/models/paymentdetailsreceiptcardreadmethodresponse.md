# PaymentDetailsReceiptCardReadMethodResponse

The method by which the card was read by the terminal.

## Example Usage

```typescript
import { PaymentDetailsReceiptCardReadMethodResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsReceiptCardReadMethodResponse = "contactless";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"chip" | "magnetic-stripe" | "near-field-communication" | "contactless" | "moto" | Unrecognized<string>
```