# GetSessionRequest

## Example Usage

```typescript
import { GetSessionRequest } from "mollie-api-typescript/models/operations";

let value: GetSessionRequest = {
  sessionId: "sess_82jFYDTrLcCQV68NLDvMJ",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sessionId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related session.                                           | sess_82jFYDTrLcCQV68NLDvMJ                                                       |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |