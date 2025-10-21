# Address

## Example Usage

```typescript
import { Address } from "mollie-api-typescript/models";

let value: Address = {
  streetAndNumber: "<value>",
  postalCode: "48408",
  city: "West Lera",
  country: "Vanuatu",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `streetAndNumber`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | A street and street number.                                                                      |
| `postalCode`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | A postal code. This field may be required if the provided country has a postal code system.      |
| `city`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `country`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | A country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |