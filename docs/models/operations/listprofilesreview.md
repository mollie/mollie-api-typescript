# ListProfilesReview

Present if changes have been made that have not yet been approved by Mollie. Changes to test profiles are approved
automatically, unless a switch to a live profile has been requested. The review object will therefore usually be
`null` in test mode.

## Example Usage

```typescript
import { ListProfilesReview } from "mollie-api-typescript/models/operations";

let value: ListProfilesReview = {
  status: "pending",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [operations.ListProfilesReviewStatus](../../models/operations/listprofilesreviewstatus.md) | :heavy_minus_sign:                                                                         | The status of the requested changes.                                                       | pending                                                                                    |