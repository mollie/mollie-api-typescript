# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "mollie-api-typescript/models/operations";

let value: CreateSubscriptionRequest = {
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `customerId`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related customer.                                          | cst_5B8cwPMGnU                                                                   |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |
| `subscriptionRequest`                                                            | [models.SubscriptionRequest](../../models/subscriptionrequest.md)                | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |