# SubmitOnboardingDataVatRegulation

Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants based in
The United Kingdom, and shifted VAT for merchants in the European Union.

The field can be omitted for merchants residing in other countries.

## Example Usage

```typescript
import { SubmitOnboardingDataVatRegulation } from "mollie-api-typescript/models/operations";

let value: SubmitOnboardingDataVatRegulation = "dutch";
```

## Values

```typescript
"dutch" | "british" | "shifted"
```