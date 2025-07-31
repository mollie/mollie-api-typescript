# ListClientsVatRegulation

Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants based in The United
Kingdom, and shifted VAT for merchants in the European Union.

The field is not present for merchants residing in other countries.

## Example Usage

```typescript
import { ListClientsVatRegulation } from "mollie-api-typescript/models/operations";

let value: ListClientsVatRegulation = "british";
```

## Values

```typescript
"dutch" | "british" | "shifted"
```