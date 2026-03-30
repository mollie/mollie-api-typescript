<!-- Start SDK Example Usage [usage] -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"]
      ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->