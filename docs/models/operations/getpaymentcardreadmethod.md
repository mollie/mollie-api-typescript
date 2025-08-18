# GetPaymentCardReadMethod

The method by which the card was read by the terminal.

## Example Usage

```typescript
import { GetPaymentCardReadMethod } from "mollie-api-typescript/models/operations";

let value: GetPaymentCardReadMethod = "contactless";
```

## Values

```typescript
"chip" | "magnetic-stripe" | "near-field-communication" | "contactless" | "moto"
```