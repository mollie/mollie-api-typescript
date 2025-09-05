<!-- Start SDK Example Usage [usage] -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    testmode: false,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->