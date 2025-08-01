# UpdateProfileRequest

## Example Usage

```typescript
import { UpdateProfileRequest } from "mollie-api-typescript/models/operations";

let value: UpdateProfileRequest = {
  id: "pfl_QkEhN94Ba",
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
    mode: "live",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the item you want to perform this operation on.                          | pfl_QkEhN94Ba                                                                              |
| `requestBody`                                                                              | [operations.UpdateProfileRequestBody](../../models/operations/updateprofilerequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |