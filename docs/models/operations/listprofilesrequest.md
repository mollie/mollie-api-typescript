# ListProfilesRequest

## Example Usage

```typescript
import { ListProfilesRequest } from "mollie-api-typescript/models/operations";

let value: ListProfilesRequest = {
  from: "pfl_QkEhN94Ba",
  limit: 50,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the<br/>result set. | pfl_QkEhN94Ba                                                                                                                  |
| `limit`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The maximum number of items to return. Defaults to 50 items.                                                                   | 50                                                                                                                             |