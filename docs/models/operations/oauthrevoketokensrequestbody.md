# OauthRevokeTokensRequestBody

## Example Usage

```typescript
import { OauthRevokeTokensRequestBody } from "mollie-api-typescript/models/operations";

let value: OauthRevokeTokensRequestBody = {
  tokenTypeHint: "<value>",
  token: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `tokenTypeHint`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | The type of token you want to revoke.<br/><br/>Possible values: `access_token` `refresh_token` |
| `token`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The token you want to revoke.                                                          |