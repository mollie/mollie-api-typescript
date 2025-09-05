# Mode

Updating a profile from `test` mode to `live` mode will trigger a verification process, where we review
the profile before it can start accepting payments.

## Example Usage

```typescript
import { Mode } from "mollie-api-typescript/models/operations";

let value: Mode = "live";
```

## Values

```typescript
"live" | "test"
```