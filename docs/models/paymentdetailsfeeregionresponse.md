# PaymentDetailsFeeRegionResponse

The applicable card fee region.

## Example Usage

```typescript
import { PaymentDetailsFeeRegionResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsFeeRegionResponse = "maestro";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"american-express" | "amex-intra-eea" | "carte-bancaire" | "intra-eu" | "intra-eu-corporate" | "domestic" | "maestro" | "other" | "inter" | "intra_eea" | Unrecognized<string>
```