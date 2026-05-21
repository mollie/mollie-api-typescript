# TerminalsGetPairingCodeRequest

## Example Usage

```typescript
import { TerminalsGetPairingCodeRequest } from "mollie-api-typescript/models/operations";

let value: TerminalsGetPairingCodeRequest = {
  pairingCodeId: "termpc_R7gX5Ea9bC4DkFj3G",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pairingCodeId`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the terminal pairing code.                                     | termpc_R7gX5Ea9bC4DkFj3G                                                         |
| `include`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | Include additional information in the response.                                  |                                                                                  |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |