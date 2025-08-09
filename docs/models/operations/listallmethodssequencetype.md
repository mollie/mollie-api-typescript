# ListAllMethodsSequenceType

Set this parameter to `first` to only return the methods that
can be used for the first payment of a recurring sequence.

Set it to `recurring` to only return methods that can be used for recurring payments or subscriptions.

## Example Usage

```typescript
import { ListAllMethodsSequenceType } from "mollie-api-typescript/models/operations";

let value: ListAllMethodsSequenceType = "oneoff";
```

## Values

```typescript
"oneoff" | "first" | "recurring"
```