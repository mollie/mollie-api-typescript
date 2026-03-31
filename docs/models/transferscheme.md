# TransferScheme

The scheme, as requested by the client.

## Example Usage

```typescript
import { TransferScheme } from "mollie-api-typescript/models";

let value: TransferScheme = {
  type: "sepa-credit-inst",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                          | [models.TransferSchemeType](../models/transferschemetype.md)                                                                    | :heavy_check_mark:                                                                                                              | The transfer scheme to be used for the transfer. The transfer scheme determines the processing time and method of the transfer. | sepa-credit-inst                                                                                                                |