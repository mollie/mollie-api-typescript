# CreateRefundRequest

## Example Usage

```typescript
import { CreateRefundRequest } from "mollie-api-typescript/models/operations";

let value: CreateRefundRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `paymentId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Provide the ID of the related payment.                                                   | tr_5B8cwPMGnU                                                                            |
| `requestBody`                                                                            | [operations.CreateRefundRequestBody](../../models/operations/createrefundrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |