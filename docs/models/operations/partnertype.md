# PartnerType

Indicates the type of partner. Will be `null` if the currently authenticated organization is not
enrolled as a partner.

## Example Usage

```typescript
import { PartnerType } from "mollie-api-typescript/models/operations";

let value: PartnerType = "oauth";
```

## Values

```typescript
"oauth" | "signuplink" | "useragent"
```