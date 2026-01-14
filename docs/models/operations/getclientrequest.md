# GetClientRequest

## Example Usage

```typescript
import { GetClientRequest } from "mollie-api-typescript/models/operations";

let value: GetClientRequest = {
  organizationId: "org_1234567",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Provide the ID of the related organization.                                                                                | org_1234567                                                                                                                |
| `embed`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br/>parameter. |                                                                                                                            |
| `idempotencyKey`                                                                                                           | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                                           | 123e4567-e89b-12d3-a456-426                                                                                                |