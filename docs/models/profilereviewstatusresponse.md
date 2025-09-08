# ProfileReviewStatusResponse

The status of the requested changes.

## Example Usage

```typescript
import { ProfileReviewStatusResponse } from "mollie-api-typescript/models";

let value: ProfileReviewStatusResponse = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "rejected" | Unrecognized<string>
```