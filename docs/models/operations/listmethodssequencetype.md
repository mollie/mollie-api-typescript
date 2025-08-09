# ListMethodsSequenceType

Set this parameter to `first` to only return the enabled methods that
can be used for the first payment of a recurring sequence.

Set it to `recurring` to only return enabled methods that can be used for recurring payments or subscriptions.

## Example Usage

```typescript
import { ListMethodsSequenceType } from "mollie-api-typescript/models/operations";

let value: ListMethodsSequenceType = "oneoff";
```

## Values

```typescript
"oneoff" | "first" | "recurring"
```