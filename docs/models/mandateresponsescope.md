# MandateResponseScope

An array defining the eligible use cases for the mandate. For creditcard mandates, this field will always be 
present and can contain one or both of the following values:

## Example Usage

```typescript
import { MandateResponseScope } from "mollie-api-typescript/models";

let value: MandateResponseScope = "customer-present";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"customer-present" | "customer-not-present" | Unrecognized<string>
```