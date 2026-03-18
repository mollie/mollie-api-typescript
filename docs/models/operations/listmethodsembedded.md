# ListMethodsEmbedded

## Example Usage

```typescript
import { ListMethodsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListMethodsEmbedded = {
  methods: [],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `methods`                                                                                                                                                        | [models.ListEntityMethod](../../models/listentitymethod.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                               | An array of payment method objects. For a complete<br/>reference of the payment method object, refer<br/>to the [Get payment method endpoint](get-method)<br/>documentation. |