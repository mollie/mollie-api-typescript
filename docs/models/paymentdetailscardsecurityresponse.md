# PaymentDetailsCardSecurityResponse

The level of security applied during card processing.

## Example Usage

```typescript
import { PaymentDetailsCardSecurityResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsCardSecurityResponse = "normal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"normal" | "3dsecure" | Unrecognized<string>
```