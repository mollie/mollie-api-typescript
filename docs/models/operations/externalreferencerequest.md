# ExternalReferenceRequest

## Example Usage

```typescript
import { ExternalReferenceRequest } from "mollie-api-typescript/models/operations";

let value: ExternalReferenceRequest = {
  type: "acquirer-reference",
  id: "123456789012345",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.TypeAcquirerReferenceRequest](../../models/operations/typeacquirerreferencerequest.md) | :heavy_minus_sign:                                                                                 | Specifies the reference type                                                                       | acquirer-reference                                                                                 |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Unique reference from the payment provider                                                         | 123456789012345                                                                                    |