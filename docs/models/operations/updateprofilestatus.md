# UpdateProfileStatus

The profile status determines whether the profile is able to receive live payments.

* `unverified`: The profile has not been verified yet and can only be used to create test payments.
* `verified`: The profile has been verified and can be used to create live payments and test payments.
* `blocked`: The profile is blocked and can no longer be used or changed.

## Example Usage

```typescript
import { UpdateProfileStatus } from "mollie-api-typescript/models/operations";

let value: UpdateProfileStatus = "unverified";
```

## Values

```typescript
"unverified" | "verified" | "blocked"
```