# SessionRequiredCustomerDetailsResponse

Customer details that should be collected during checkout.

## Example Usage

```typescript
import { SessionRequiredCustomerDetailsResponse } from "mollie-api-typescript/models";

let value: SessionRequiredCustomerDetailsResponse = "billing-address";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"email" | "billing-address" | "shipping-address" | Unrecognized<string>
```