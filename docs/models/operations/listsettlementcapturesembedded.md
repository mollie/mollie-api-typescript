# ListSettlementCapturesEmbedded

## Example Usage

```typescript
import { ListSettlementCapturesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListSettlementCapturesEmbedded = {
  captures: [],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `captures`                                                                              | [models.ListSettlementCaptureResponse](../../models/listsettlementcaptureresponse.md)[] | :heavy_check_mark:                                                                      | An array of capture objects.                                                            |