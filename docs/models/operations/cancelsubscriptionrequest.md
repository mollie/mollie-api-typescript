# CancelSubscriptionRequest

## Example Usage

```typescript
import { CancelSubscriptionRequest } from "mollie-api-typescript/models/operations";

let value: CancelSubscriptionRequest = {
  customerId: "cst_5B8cwPMGnU",
  subscriptionId: "sub_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related customer.                                                              | cst_5B8cwPMGnU                                                                                       |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | Provide the ID of the related subscription.                                                          | sub_5B8cwPMGnU                                                                                       |
| `requestBody`                                                                                        | [operations.CancelSubscriptionRequestBody](../../models/operations/cancelsubscriptionrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |