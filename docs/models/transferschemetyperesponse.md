# TransferSchemeTypeResponse

The transfer scheme to be used for the transfer. The transfer scheme determines the processing time and method of the transfer.

## Example Usage

```typescript
import { TransferSchemeTypeResponse } from "mollie-api-typescript/models";

let value: TransferSchemeTypeResponse = "sepa-credit-inst";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sepa-credit-inst" | "sepa-credit" | Unrecognized<string>
```