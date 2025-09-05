# ListCapturesEmbedded

## Example Usage

```typescript
import { ListCapturesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListCapturesEmbedded = {
  captures: [],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `captures`                                                  | [models.CaptureResponse](../../models/captureresponse.md)[] | :heavy_check_mark:                                          | An array of capture objects.                                |