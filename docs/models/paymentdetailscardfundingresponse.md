# PaymentDetailsCardFundingResponse

The card type.

## Example Usage

```typescript
import { PaymentDetailsCardFundingResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsCardFundingResponse = "credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"debit" | "credit" | "prepaid" | "deferred-debit" | Unrecognized<string>
```