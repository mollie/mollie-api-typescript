# PaymentDetailsReceiptCardReadMethodResponse

The method by which the card was read by the terminal.

## Example Usage

```typescript
import { PaymentDetailsReceiptCardReadMethodResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsReceiptCardReadMethodResponse = "contactless";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"chip" | "magnetic-stripe" | "near-field-communication" | "contactless" | "moto" | Unrecognized<string>
```