# CreateProfileRequest

## Example Usage

```typescript
import { CreateProfileRequest } from "mollie-api-typescript/models/operations";

let value: CreateProfileRequest = {
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
  entityProfile: {
    name: "My website name",
    website: "https://example.com",
    email: "test@mollie.com",
    phone: "+31208202070",
    description: "My website description",
    countriesOfActivity: [
      "NL",
      "GB",
    ],
    businessCategory: "OTHER_MERCHANDISE",
    status: "unverified",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |
| `entityProfile`                                                                  | [models.EntityProfile](../../models/entityprofile.md)                            | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |