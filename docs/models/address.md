# Address

## Example Usage

```typescript
import { Address } from "mollie-api-typescript/models";

let value: Address = {
  streetAndNumber: "Keizersgracht 126",
  postalCode: "1015 CW",
  city: "Amsterdam",
  country: "NL",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `streetAndNumber`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | A street and street number.                                                                      | Keizersgracht 126                                                                                |
| `postalCode`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | A postal code. This field may be required if the provided country has a postal code system.      | 1015 CW                                                                                          |
| `city`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | Amsterdam                                                                                        |
| `country`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | A country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. | NL                                                                                               |