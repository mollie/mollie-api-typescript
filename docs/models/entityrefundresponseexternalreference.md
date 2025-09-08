# EntityRefundResponseExternalReference

## Example Usage

```typescript
import { EntityRefundResponseExternalReference } from "mollie-api-typescript/models";

let value: EntityRefundResponseExternalReference = {
  type: "acquirer-reference",
  id: "123456789012345",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [models.RefundExternalReferenceTypeResponse](../models/refundexternalreferencetyperesponse.md) | :heavy_minus_sign:                                                                             | Specifies the reference type                                                                   | acquirer-reference                                                                             |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | Unique reference from the payment provider                                                     | 123456789012345                                                                                |