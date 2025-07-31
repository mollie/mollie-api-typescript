# CreateRefundExternalReferenceResponse

## Example Usage

```typescript
import { CreateRefundExternalReferenceResponse } from "mollie-api-typescript/models/operations";

let value: CreateRefundExternalReferenceResponse = {
  type: "acquirer-reference",
  id: "123456789012345",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.CreateRefundTypeResponse](../../models/operations/createrefundtyperesponse.md) | :heavy_minus_sign:                                                                         | Specifies the reference type                                                               | acquirer-reference                                                                         |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | Unique reference from the payment provider                                                 | 123456789012345                                                                            |