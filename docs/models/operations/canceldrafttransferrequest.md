# CancelDraftTransferRequest

## Example Usage

```typescript
import { CancelDraftTransferRequest } from "mollie-api-typescript/models/operations";

let value: CancelDraftTransferRequest = {
  draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `draftTransferId`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | Provide the ID of the related draft transfer.                                                          | badrt_87GByBuj4UCcUTEbs6aGJ                                                                            |
| `idempotencyKey`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                       | 123e4567-e89b-12d3-a456-426                                                                            |
| `requestBody`                                                                                          | [operations.CancelDraftTransferRequestBody](../../models/operations/canceldrafttransferrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |