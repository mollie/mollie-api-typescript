# Currencies

## Example Usage

```typescript
import { Currencies } from "mollie-api-typescript/models";

let value: Currencies = "EUR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EUR" | "GBP" | "CHF" | "DKK" | "NOK" | "PLN" | "SEK" | "USD" | "CZK" | "HUF" | "AUD" | "CAD" | Unrecognized<string>
```