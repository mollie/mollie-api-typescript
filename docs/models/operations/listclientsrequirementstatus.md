# ListClientsRequirementStatus

The status of the requirement depends on its due date.
If no due date is given, the status will be `requested`.

## Example Usage

```typescript
import { ListClientsRequirementStatus } from "mollie-api-typescript/models/operations";

let value: ListClientsRequirementStatus = "past-due";
```

## Values

```typescript
"currently-due" | "past-due" | "requested"
```