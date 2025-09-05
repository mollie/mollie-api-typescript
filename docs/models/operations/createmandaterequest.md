# CreateMandateRequest

## Example Usage

```typescript
import { CreateMandateRequest } from "mollie-api-typescript/models/operations";

let value: CreateMandateRequest = {
  customerId: "cst_5B8cwPMGnU",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `customerId`                                          | *string*                                              | :heavy_check_mark:                                    | Provide the ID of the related customer.               | cst_5B8cwPMGnU                                        |
| `entityMandate`                                       | [models.EntityMandate](../../models/entitymandate.md) | :heavy_minus_sign:                                    | N/A                                                   |                                                       |