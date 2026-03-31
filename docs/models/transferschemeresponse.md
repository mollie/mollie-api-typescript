# TransferSchemeResponse

The scheme, as requested by the client.

## Example Usage

```typescript
import { TransferSchemeResponse } from "mollie-api-typescript/models";

let value: TransferSchemeResponse = {
  type: "sepa-credit-inst",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                          | [models.TransferSchemeTypeResponse](../models/transferschemetyperesponse.md)                                                    | :heavy_check_mark:                                                                                                              | The transfer scheme to be used for the transfer. The transfer scheme determines the processing time and method of the transfer. | sepa-credit-inst                                                                                                                |