# BalanceTransferPartyTypeResponse

Defines the type of the party. At the moment, only `organization` is supported.

## Example Usage

```typescript
import { BalanceTransferPartyTypeResponse } from "mollie-api-typescript/models";

let value: BalanceTransferPartyTypeResponse = "organization";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"organization" | Unrecognized<string>
```