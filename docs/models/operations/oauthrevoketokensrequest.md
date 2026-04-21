# OauthRevokeTokensRequest

## Example Usage

```typescript
import { OauthRevokeTokensRequest } from "mollie-api-typescript/models/operations";

let value: OauthRevokeTokensRequest = {
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                   | 123e4567-e89b-12d3-a456-426                                                                        |
| `requestBody`                                                                                      | [operations.OauthRevokeTokensRequestBody](../../models/operations/oauthrevoketokensrequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |