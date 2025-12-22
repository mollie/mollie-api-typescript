# ListChargebacksEmbedded

## Example Usage

```typescript
import { ListChargebacksEmbedded } from "mollie-api-typescript/models/operations";

let value: ListChargebacksEmbedded = {
  chargebacks: [],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `chargebacks`                                                         | [models.ListEntityChargeback](../../models/listentitychargeback.md)[] | :heavy_check_mark:                                                    | A list of chargeback objects.                                         |