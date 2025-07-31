# ListAllRefundsExternalReference

## Example Usage

```typescript
import { ListAllRefundsExternalReference } from "mollie-api-typescript/models/operations";

let value: ListAllRefundsExternalReference = {
  type: "acquirer-reference",
  id: "123456789012345",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.ListAllRefundsType](../../models/operations/listallrefundstype.md) | :heavy_minus_sign:                                                             | Specifies the reference type                                                   | acquirer-reference                                                             |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | Unique reference from the payment provider                                     | 123456789012345                                                                |