# ListMandatesEmbedded

## Example Usage

```typescript
import { ListMandatesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListMandatesEmbedded = {
  mandates: [
    {
      id: "mdt_5B8cwPMGnU",
      mode: "live",
      method: "directdebit",
      details: {
        consumerName: "John Doe",
        consumerAccount: "NL55INGB0000000000",
        consumerBic: "BANKBIC",
        cardHolder: "John Doe",
        cardNumber: "3240",
        cardExpiryDate: "2025-01-01",
        cardLabel: "Visa",
        cardFingerprint: "d3290e932k02f",
      },
      signatureDate: "2025-01-01",
      mandateReference: "ID-1023892",
      status: "valid",
      customerId: "cst_5B8cwPMGnU",
      createdAt: "2024-03-20T09:13:37.0Z",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        customer: {
          href: "https://...",
          type: "application/hal+json",
        },
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mandates`                                                                         | [operations.ListMandatesMandate](../../models/operations/listmandatesmandate.md)[] | :heavy_minus_sign:                                                                 | An array of mandate objects.                                                       |