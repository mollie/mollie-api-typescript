# PaymentDetailsCardAuditionResponse

The card's target audience, if known.

## Example Usage

```typescript
import { PaymentDetailsCardAuditionResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsCardAuditionResponse = "consumer";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"consumer" | "business" | Unrecognized<string>
```