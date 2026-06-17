# Company

Billie is a business-to-business (B2B) payment method. It requires extra information to identify the
organization that is completing the payment. It is recommended to include these parameters up front for a
seamless flow. Otherwise, Billie will ask the customer to complete the missing fields during checkout.

* `billingAddress.organizationName`: The organization's name.
* `registrationNumber` _string_: The organization's registration number.
* `vatNumber` _string_: The organization's VAT number.
* `entityType` _string_: The organization's entity type.

## Example Usage

```typescript
import { Company } from "mollie-api-typescript/models";

let value: Company = {
  registrationNumber: "12345678",
  vatNumber: "NL123456789B01",
  entityType: "LLC",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `registrationNumber`                    | *string*                                | :heavy_minus_sign:                      | The organization's registration number. | 12345678                                |
| `vatNumber`                             | *string*                                | :heavy_minus_sign:                      | The organization's VAT number.          | NL123456789B01                          |
| `entityType`                            | *string*                                | :heavy_minus_sign:                      | The organization's entity type.         | LLC                                     |