# CreatePaymentRequest

## Example Usage

```typescript
import { CreatePaymentRequest } from "mollie-api-typescript/models/operations";

let value: CreatePaymentRequest = {
  include: "details.qrCode",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `include`                                                                                            | [operations.CreatePaymentInclude](../../models/operations/createpaymentinclude.md)                   | :heavy_minus_sign:                                                                                   | This endpoint allows you to include additional information via the `include` query string parameter. | details.qrCode                                                                                       |
| `requestBody`                                                                                        | [operations.CreatePaymentRequestBody](../../models/operations/createpaymentrequestbody.md)           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |