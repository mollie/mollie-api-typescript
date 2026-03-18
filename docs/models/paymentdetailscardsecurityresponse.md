# PaymentDetailsCardSecurityResponse

The level of security applied during card processing.

## Example Usage

```typescript
import { PaymentDetailsCardSecurityResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsCardSecurityResponse = "normal";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"normal" | "3dsecure" | Unrecognized<string>
```