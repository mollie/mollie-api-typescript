# Counterparty

The counterparty involved in the transaction, including their name and account identifier.

## Example Usage

```typescript
import { Counterparty } from "mollie-api-typescript/models";

let value: Counterparty = {
  identifier: "NL11ABNA01234567890",
  name: "Beneficiary Name",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `identifier`                                            | *string*                                                | :heavy_minus_sign:                                      | The account identifier (e.g. IBAN) of the counterparty. | NL11ABNA01234567890                                     |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | The name of the counterparty.                           | Beneficiary Name                                        |