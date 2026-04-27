<!-- Start SDK Example Usage [usage] -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    oAuth: process.env["CLIENT_O_AUTH"] ?? "",
  },
});

async function run() {
  const result = await client.oauth.generate({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      grantType: "authorization_code",
      code: "auth_...",
      refreshToken: "refresh_...",
      redirectUri: "https://example.com/redirect",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->