# DraftTransferStatusReason

The reason for the draft transfer's current status. `null` unless `status` is `declined`.

## Example Usage

```typescript
import { DraftTransferStatusReason } from "mollie-api-typescript/models";

let value: DraftTransferStatusReason = {
  code: "deleted-by-creator",
  message: "The draft transfer has been deleted by the user who created it",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                                                 | [models.DraftTransferStatusReasonCodeResponse](../models/drafttransferstatusreasoncoderesponse.md)                                                     | :heavy_check_mark:                                                                                                                                     | A machine-readable code that indicates the reason for the draft transfer's current status.                                                             | deleted-by-creator                                                                                                                                     |
| `message`                                                                                                                                              | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | A human-readable explanation of the status reason. For `declined-by-initiator`, this includes the<br/>initiator's free-text reason when they provided one. | The draft transfer has been deleted by the user who created it                                                                                         |