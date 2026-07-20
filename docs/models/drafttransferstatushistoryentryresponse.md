# DraftTransferStatusHistoryEntryResponse

A single entry in the draft transfer's status history.

## Example Usage

```typescript
import { DraftTransferStatusHistoryEntryResponse } from "mollie-api-typescript/models";

let value: DraftTransferStatusHistoryEntryResponse = {
  status: "awaiting-initiation",
  createdAt: new Date("2025-01-01T12:00:00+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [models.DraftTransferStatusResponse](../models/drafttransferstatusresponse.md)                | :heavy_check_mark:                                                                            | The status of the draft transfer.                                                             | awaiting-initiation                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the draft transfer entered this status, in ISO 8601 format.                 | 2025-01-01T12:00:00+00:00                                                                     |