# CreateClientLinkRequest

## Example Usage

```typescript
import { CreateClientLinkRequest } from "mollie-api-typescript/models/operations";

let value: CreateClientLinkRequest = {
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
| `owner`                                                                                                                                 | [operations.Owner](../../models/operations/owner.md)                                                                                    | :heavy_check_mark:                                                                                                                      | Personal data of your customer.                                                                                                         |                                                                                                                                         |
| `name`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Name of the organization.                                                                                                               | Acme Corporation                                                                                                                        |
| `address`                                                                                                                               | [operations.CreateClientLinkAddress](../../models/operations/createclientlinkaddress.md)                                                | :heavy_check_mark:                                                                                                                      | Address of the organization.                                                                                                            |                                                                                                                                         |
| `registrationNumber`                                                                                                                    | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The registration number of the organization at their local chamber of commerce.                                                         | 12345678                                                                                                                                |
| `vatNumber`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The VAT number of the organization, if based in the European Union. VAT numbers are verified against the international registry *VIES*. | 123456789B01                                                                                                                            |