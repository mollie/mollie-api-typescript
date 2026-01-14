# UpdateProfileRequest

## Example Usage

```typescript
import { UpdateProfileRequest } from "mollie-api-typescript/models/operations";

let value: UpdateProfileRequest = {
  profileId: "pfl_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
  requestBody: {
    name: "My new website name",
    website: "https://example.com",
    email: "test@mollie.com",
    phone: "+31208202071",
    description: "My website description",
    countriesOfActivity: [
      "NL",
      "GB",
    ],
    businessCategory: "OTHER_MERCHANDISE",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `profileId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related profile.                                                     | pfl_5B8cwPMGnU                                                                             |
| `idempotencyKey`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | A unique key to ensure idempotent requests. This key should be a UUID v4 string.           | 123e4567-e89b-12d3-a456-426                                                                |
| `requestBody`                                                                              | [operations.UpdateProfileRequestBody](../../models/operations/updateprofilerequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |