# ClientLinkRequest

## Example Usage

```typescript
import { ClientLinkRequest } from "mollie-api-typescript/models";

let value: ClientLinkRequest = {
  owner: {
    email: "john@example.org",
    givenName: "John",
    familyName: "Doe",
    locale: "en_US",
  },
  name: "Acme Corporation",
  address: {
    streetAndNumber: "Main Street 123",
    postalCode: "1234AB",
    city: "Amsterdam",
    country: "NL",
  },
  registrationNumber: "12345678",
  vatNumber: "123456789B01",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `owner`                                                                                                                                 | [models.Owner](../models/owner.md)                                                                                                      | :heavy_check_mark:                                                                                                                      | Personal data of your customer.                                                                                                         |                                                                                                                                         |
| `name`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Name of the organization.                                                                                                               | Acme Corporation                                                                                                                        |
| `address`                                                                                                                               | [models.ClientLinkRequestAddress](../models/clientlinkrequestaddress.md)                                                                | :heavy_check_mark:                                                                                                                      | Address of the organization.                                                                                                            |                                                                                                                                         |
| `registrationNumber`                                                                                                                    | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The registration number of the organization at their local chamber of commerce.                                                         | 12345678                                                                                                                                |
| `vatNumber`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The VAT number of the organization, if based in the European Union. VAT numbers are verified against the<br/>international registry *VIES*. | 123456789B01                                                                                                                            |