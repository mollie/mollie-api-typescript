# PaymentDetailsCardLabelResponse

The card's label, if known.

## Example Usage

```typescript
import { PaymentDetailsCardLabelResponse } from "mollie-api-typescript/models";

let value: PaymentDetailsCardLabelResponse = "Mastercard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"American Express" | "Carta Si" | "Carte Bleue" | "Dankort" | "Diners Club" | "Discover" | "JCB" | "Laser" | "Maestro" | "Mastercard" | "Unionpay" | "Visa" | "Vpay" | Unrecognized<string>
```