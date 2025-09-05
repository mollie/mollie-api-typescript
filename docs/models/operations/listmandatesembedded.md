# ListMandatesEmbedded

## Example Usage

```typescript
import { ListMandatesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListMandatesEmbedded = {
  mandates: [],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `mandates`                                                  | [models.MandateResponse](../../models/mandateresponse.md)[] | :heavy_check_mark:                                          | An array of mandate objects.                                |