# MandateDetailsCardLabelResponse

The card's label. Available for card mandates, if the card label could be detected.

## Example Usage

```typescript
import { MandateDetailsCardLabelResponse } from "mollie-api-typescript/models";

let value: MandateDetailsCardLabelResponse = "Visa";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"American Express" | "Carta Si" | "Carte Bleue" | "Dankort" | "Diners Club" | "Discover" | "JCB" | "Laser" | "Maestro" | "Mastercard" | "Unionpay" | "Visa" | Unrecognized<string>
```