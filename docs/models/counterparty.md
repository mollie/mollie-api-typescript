# Counterparty

The counterparty involved in the transaction, including their name and account identifier.

## Example Usage

```typescript
import { Counterparty } from "mollie-api-typescript/models";

let value: Counterparty = {
  identifier: "NL02ABNA0123456789",
  name: "Beneficiary Name",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `identifier`                                            | *string*                                                | :heavy_minus_sign:                                      | The account identifier (e.g. IBAN) of the counterparty. | NL02ABNA0123456789                                      |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | The name of the counterparty.                           | Beneficiary Name                                        |