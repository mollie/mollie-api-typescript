# GiftcardStatus

The status of the issuer.
If the status is `pending-issuer`, an additional action from your side may be required with the issuer.

## Example Usage

```typescript
import { GiftcardStatus } from "mollie-api-typescript/models";

let value: GiftcardStatus = "activated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"activated" | "pending-issuer" | Unrecognized<string>
```