# OnboardingVatRegulation

Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants based in
The United Kingdom, and shifted VAT for merchants in the European Union.

The field can be omitted for merchants residing in other countries.

## Example Usage

```typescript
import { OnboardingVatRegulation } from "mollie-api-typescript/models";

let value: OnboardingVatRegulation = "dutch";
```

## Values

```typescript
"dutch" | "british" | "shifted"
```