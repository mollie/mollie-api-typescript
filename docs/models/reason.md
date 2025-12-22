# Reason

Reason for the chargeback as given by the bank. Only available for chargebacks of SEPA Direct Debit payments.

## Example Usage

```typescript
import { Reason } from "mollie-api-typescript/models";

let value: Reason = {
  code: "AC01",
  description: "Account identifier incorrect (i.e. invalid IBAN)",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `code`                                           | *string*                                         | :heavy_check_mark:                               | Technical code provided by the bank.             | AC01                                             |
| `description`                                    | *string*                                         | :heavy_check_mark:                               | A more detailed human-friendly description.      | Account identifier incorrect (i.e. invalid IBAN) |