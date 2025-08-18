# CreateCustomerPaymentCardReadMethod

The method by which the card was read by the terminal.

## Example Usage

```typescript
import { CreateCustomerPaymentCardReadMethod } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentCardReadMethod = "contactless";
```

## Values

```typescript
"chip" | "magnetic-stripe" | "near-field-communication" | "contactless" | "moto"
```