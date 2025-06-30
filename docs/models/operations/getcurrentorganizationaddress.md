# GetCurrentOrganizationAddress

The address of the organization.

## Example Usage

```typescript
import { GetCurrentOrganizationAddress } from "mollie-api-typescript/models/operations";

let value: GetCurrentOrganizationAddress = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `streetAndNumber`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | A street and street number.                                                                      |
| `postalCode`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | A postal code. This field may be required if the provided country has a postal code system.      |
| `city`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `country`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | A country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |