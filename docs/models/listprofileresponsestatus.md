# ListProfileResponseStatus

The profile status determines whether the profile is able to receive live payments.

* `unverified`: The profile has not been verified yet and can only be used to create test payments.
* `verified`: The profile has been verified and can be used to create live payments and test payments.
* `blocked`: The profile is blocked and can no longer be used or changed.

## Example Usage

```typescript
import { ListProfileResponseStatus } from "mollie-api-typescript/models";

let value: ListProfileResponseStatus = "unverified";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unverified" | "verified" | "blocked" | Unrecognized<string>
```