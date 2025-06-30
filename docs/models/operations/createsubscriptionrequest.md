# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "mollie-api-typescript/models/operations";

let value: CreateSubscriptionRequest = {
  customerId: "cst_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related customer.                                                              | cst_5B8cwPMGnU                                                                                       |
| `requestBody`                                                                                        | [operations.CreateSubscriptionRequestBody](../../models/operations/createsubscriptionrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |