# VerificationResultEnum

The result of the Verification of Payee check.

## Example Usage

```typescript
import { VerificationResultEnum } from "mollie-api-typescript/models";

let value: VerificationResultEnum = "match";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"match" | "no-match" | "close-match" | "not-available" | Unrecognized<string>
```