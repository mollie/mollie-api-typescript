# Contractor

Information regarding the *contractor*. Only relevant for `voucher` issuers.

## Example Usage

```typescript
import { Contractor } from "mollie-api-typescript/models";

let value: Contractor = {
  id: "Apetiz",
  name: "Apetiz",
  contractId: "someContractId",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                | Apetiz             |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | Apetiz             |
| `contractId`       | *string*           | :heavy_minus_sign: | N/A                | someContractId     |