# OauthGenerateTokensResponse

The newly generated access token and refresh token.

## Example Usage

```typescript
import { OauthGenerateTokensResponse } from "mollie-api-typescript/models/operations";

let value: OauthGenerateTokensResponse = {
  accessToken: "access_...",
  refreshToken: "refresh_...",
  expiresIn: 3600,
  tokenType: "bearer",
  scope: "payments.read",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                                         | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The app access token, with which you will be able to access the Mollie API on the merchant's behalf.                                  | access_...                                                                                                                            |
| `refreshToken`                                                                                                                        | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The refresh token, with which you will be able to retrieve new app access tokens on this endpoint. The<br/>refresh token does not expire. | refresh_...                                                                                                                           |
| `expiresIn`                                                                                                                           | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The number of seconds left before the app access token expires. Be sure to renew your app access token<br/>before this reaches zero.  | 3600                                                                                                                                  |
| `tokenType`                                                                                                                           | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | As per OAuth standards, the provided app access token can only be used with `bearer` authentication.<br/><br/>Possible values: `bearer` | bearer                                                                                                                                |
| `scope`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | A space-separated list of [permissions](https://docs.mollie.com/docs/permissions).                                                    | payments.read                                                                                                                         |