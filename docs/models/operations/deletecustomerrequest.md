# DeleteCustomerRequest

## Example Usage

```typescript
import { DeleteCustomerRequest } from "mollie-api-typescript/models/operations";

let value: DeleteCustomerRequest = {
  customerId: "cst_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `customerId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | Provide the ID of the related customer.                                                      | cst_5B8cwPMGnU                                                                               |
| `requestBody`                                                                                | [operations.DeleteCustomerRequestBody](../../models/operations/deletecustomerrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |