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

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | Specifies the reference type<br/><br/>Possible values: `acquirer-reference` | acquirer-reference                                                  |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | Unique reference from the payment provider                          | 123456789012345                                                     |