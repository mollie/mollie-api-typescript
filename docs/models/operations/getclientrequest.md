# GetClientRequest

## Example Usage

```typescript
import { GetClientRequest } from "mollie-api-typescript/models/operations";

let value: GetClientRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Provide the ID of the item you want to perform this operation on.                                                          |
| `embed`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | This endpoint allows embedding related API items by appending the following values via the `embed` query string<br/>parameter. |