# CreateCustomerPaymentRequest

## Example Usage

```typescript
import { CreateCustomerPaymentRequest } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentRequest = {
  customerId: "cst_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Provide the ID of the related customer.                                                                    | cst_5B8cwPMGnU                                                                                             |
| `requestBody`                                                                                              | [operations.CreateCustomerPaymentRequestBody](../../models/operations/createcustomerpaymentrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |