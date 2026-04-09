# MandateScopes

An array defining the eligible use cases for the mandate. For creditcard mandates, this field will always be 
present and can contain one or both of the following values:

## Example Usage

```typescript
import { MandateScopes } from "mollie-api-typescript/models";

let value: MandateScopes = "customer-present";
```

## Values

```typescript
"customer-present" | "customer-not-present"
```