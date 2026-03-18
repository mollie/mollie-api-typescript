# ClientLinkRequestAddress

Address of the organization.

## Example Usage

```typescript
import { ClientLinkRequestAddress } from "mollie-api-typescript/models";

let value: ClientLinkRequestAddress = {
  streetAndNumber: "Main Street 123",
  postalCode: "1234AB",
  city: "Amsterdam",
  country: "NL",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streetAndNumber`                                                                                                          | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The street name and house number of the organization.                                                                      | Main Street 123                                                                                                            |
| `postalCode`                                                                                                               | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The postal code of the organization. Required if a street address is provided and if the country has a postal<br/>code system. | 1234AB                                                                                                                     |
| `city`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The city of the organization. Required if a street address is provided.                                                    | Amsterdam                                                                                                                  |
| `country`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The country of the address in<br/>[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.           | NL                                                                                                                         |