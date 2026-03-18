# Owner

Personal data of your customer.

## Example Usage

```typescript
import { Owner } from "mollie-api-typescript/models";

let value: Owner = {
  email: "john@example.org",
  givenName: "John",
  familyName: "Doe",
  locale: "en_US",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | The email address of your customer.                  | john@example.org                                     |
| `givenName`                                          | *string*                                             | :heavy_check_mark:                                   | The given name (first name) of your customer.        | John                                                 |
| `familyName`                                         | *string*                                             | :heavy_check_mark:                                   | The family name (surname) of your customer.          | Doe                                                  |
| `locale`                                             | [models.LocaleResponse](../models/localeresponse.md) | :heavy_minus_sign:                                   | Allows you to preset the language to be used.        | en_US                                                |