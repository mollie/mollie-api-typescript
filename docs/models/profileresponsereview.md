# ProfileResponseReview

Present if changes have been made that have not yet been approved by Mollie. Changes to test profiles are approved
automatically, unless a switch to a live profile has been requested. The review object will therefore usually be
`null` in test mode.

## Example Usage

```typescript
import { ProfileResponseReview } from "mollie-api-typescript/models";

let value: ProfileResponseReview = {
  status: "pending",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `status`                                                                       | [models.ProfileReviewStatusResponse](../models/profilereviewstatusresponse.md) | :heavy_minus_sign:                                                             | The status of the requested changes.                                           | pending                                                                        |