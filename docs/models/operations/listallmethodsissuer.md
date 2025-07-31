# ListAllMethodsIssuer

## Example Usage

```typescript
import { ListAllMethodsIssuer } from "mollie-api-typescript/models/operations";

let value: ListAllMethodsIssuer = {
  id: "ideal_ABNANL2A",
  name: "ING Bank",
  image: {
    size1x: "https://...",
    size2x: "https://...",
    svg: "https://...",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `resource`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | ideal_ABNANL2A                                                                               |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The full name of the issuer.                                                                 | ING Bank                                                                                     |
| `image`                                                                                      | [operations.ListAllMethodsIssuerImage](../../models/operations/listallmethodsissuerimage.md) | :heavy_check_mark:                                                                           | URLs of images representing the issuer.<br/>required:<br/>  - size1x<br/>  - size2x<br/>  - svg |                                                                                              |