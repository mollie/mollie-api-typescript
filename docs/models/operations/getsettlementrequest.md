# GetSettlementRequest

## Example Usage

```typescript
import { GetSettlementRequest } from "mollie-api-typescript/models/operations";

let value: GetSettlementRequest = {
  settlementId: "stl_5B8cwPMGnU",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `settlementId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related settlement.                                        | stl_5B8cwPMGnU                                                                   |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |