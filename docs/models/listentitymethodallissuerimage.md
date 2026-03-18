# ListEntityMethodAllIssuerImage

URLs of images representing the issuer.
required:
  - size1x
  - size2x
  - svg

## Example Usage

```typescript
import { ListEntityMethodAllIssuerImage } from "mollie-api-typescript/models";

let value: ListEntityMethodAllIssuerImage = {
  size1x: "https://...",
  size2x: "https://...",
  svg: "https://...",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size1x`                                                                                                                                                               | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | The URL pointing to an icon of 32 by 24 pixels.                                                                                                                        | https://...                                                                                                                                                            |
| `size2x`                                                                                                                                                               | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | The URL pointing to an icon of 64 by 48 pixels.                                                                                                                        | https://...                                                                                                                                                            |
| `svg`                                                                                                                                                                  | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | The URL pointing to a vector version of the icon. Usage of this format is preferred, since the icon can<br/>scale to any desired size without compromising visual quality. | https://...                                                                                                                                                            |