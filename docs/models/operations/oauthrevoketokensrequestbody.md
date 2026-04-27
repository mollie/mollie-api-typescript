# OauthRevokeTokensRequestBody

## Example Usage

```typescript
import { OauthRevokeTokensRequestBody } from "mollie-api-typescript/models/operations";

let value: OauthRevokeTokensRequestBody = {
  tokenTypeHint: "access_token",
  token: "access_...",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `tokenTypeHint`                                                 | [models.OauthTokenTypeHint](../../models/oauthtokentypehint.md) | :heavy_check_mark:                                              | N/A                                                             | access_token                                                    |
| `token`                                                         | *string*                                                        | :heavy_check_mark:                                              | The token you want to revoke.                                   | access_...                                                      |