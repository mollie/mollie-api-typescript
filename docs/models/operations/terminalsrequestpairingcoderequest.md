# TerminalsRequestPairingCodeRequest

## Example Usage

```typescript
import { TerminalsRequestPairingCodeRequest } from "mollie-api-typescript/models/operations";

let value: TerminalsRequestPairingCodeRequest = {
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `include`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Include additional information in the response.                                                                        |                                                                                                                        |
| `idempotencyKey`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | A unique key to ensure idempotent requests. This key should be a UUID v4 string.                                       | 123e4567-e89b-12d3-a456-426                                                                                            |
| `requestBody`                                                                                                          | [operations.TerminalsRequestPairingCodeRequestBody](../../models/operations/terminalsrequestpairingcoderequestbody.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |