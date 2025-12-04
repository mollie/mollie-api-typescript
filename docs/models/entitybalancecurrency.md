# EntityBalanceCurrency

The balance's ISO 4217 currency code.

## Example Usage

```typescript
import { EntityBalanceCurrency } from "mollie-api-typescript/models";

let value: EntityBalanceCurrency = "EUR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EUR" | "GBP" | "CHF" | "DKK" | "NOK" | "PLN" | "SEK" | "USD" | "CZK" | "HUF" | "AUD" | "CAD" | Unrecognized<string>
```