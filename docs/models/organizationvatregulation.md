# OrganizationVatRegulation

Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants based in The United
Kingdom, and shifted VAT for merchants in the European Union.

The field is not present for merchants residing in other countries.

## Example Usage

```typescript
import { OrganizationVatRegulation } from "mollie-api-typescript/models";

let value: OrganizationVatRegulation = "dutch";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dutch" | "british" | "shifted" | Unrecognized<string>
```