# CreateMandateRequest

## Example Usage

```typescript
import { CreateMandateRequest } from "mollie-api-typescript/models/operations";

let value: CreateMandateRequest = {
  customerId: "cst_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `customerId`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related customer.                                          | cst_5B8cwPMGnU                                                                   |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |
| `mandateRequest`                                                                 | [models.MandateRequest](../../models/mandaterequest.md)                          | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |