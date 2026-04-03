# MatchUnmatchedCreditTransferRequest

## Example Usage

```typescript
import { MatchUnmatchedCreditTransferRequest } from "mollie-api-typescript/models/operations";

let value: MatchUnmatchedCreditTransferRequest = {
  unmatchedCreditTransferId: "uct_abcDEFghij123456789",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `unmatchedCreditTransferId`                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | Provide the ID of the related unmatched credit transfer.                                          | uct_abcDEFghij123456789                                                                           |
| `idempotencyKey`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                  | 123e4567-e89b-12d3-a456-426                                                                       |
| `unmatchedCreditTransferMatchRequest`                                                             | [models.UnmatchedCreditTransferMatchRequest](../../models/unmatchedcredittransfermatchrequest.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |