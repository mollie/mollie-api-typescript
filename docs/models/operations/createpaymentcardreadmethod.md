# CreatePaymentCardReadMethod

The method by which the card was read by the terminal.

## Example Usage

```typescript
import { CreatePaymentCardReadMethod } from "mollie-api-typescript/models/operations";

let value: CreatePaymentCardReadMethod = "contactless";
```

## Values

```typescript
"chip" | "magnetic-stripe" | "near-field-communication" | "contactless" | "moto"
```