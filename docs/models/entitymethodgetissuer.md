# EntityMethodGetIssuer

## Example Usage

```typescript
import { EntityMethodGetIssuer } from "mollie-api-typescript/models";

let value: EntityMethodGetIssuer = {
  resource: "issuer",
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

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `resource`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | issuer                                                                          |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | ideal_ABNANL2A                                                                  |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The full name of the issuer.                                                    | ING Bank                                                                        |
| `image`                                                                         | [models.EntityMethodGetIssuerImage](../models/entitymethodgetissuerimage.md)    | :heavy_check_mark:                                                              | URLs of images representing the issuer.<br/>required:<br/>  - size1x<br/>  - size2x<br/>  - svg |                                                                                 |