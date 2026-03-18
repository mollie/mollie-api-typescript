# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "mollie-api-typescript/models/operations";

let value: CancelSubscriptionRequest = {
  customerId: "cst_5B8cwPMGnU",
  subscriptionId: "sub_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related customer.                                                              | cst_5B8cwPMGnU                                                                                       |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related subscription.                                                          | sub_5B8cwPMGnU                                                                                       |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                     | 123e4567-e89b-12d3-a456-426                                                                          |
| `requestBody`                                                                                        | [operations.CancelSubscriptionRequestBody](../../models/operations/cancelsubscriptionrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |