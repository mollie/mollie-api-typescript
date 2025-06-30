# RevokeMandateRequest

## Example Usage

```typescript
import { RevokeMandateRequest } from "mollie-api-typescript/models/operations";

let value: RevokeMandateRequest = {
  customerId: "cst_5B8cwPMGnU",
  mandateId: "mdt_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `customerId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related customer.                                                    | cst_5B8cwPMGnU                                                                             |
| `mandateId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related mandate.                                                     | mdt_5B8cwPMGnU                                                                             |
| `requestBody`                                                                              | [operations.RevokeMandateRequestBody](../../models/operations/revokemandaterequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |