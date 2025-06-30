# ReleaseAuthorizationRequest

## Example Usage

```typescript
import { ReleaseAuthorizationRequest } from "mollie-api-typescript/models/operations";

let value: ReleaseAuthorizationRequest = {
  paymentId: "tr_5B8cwPMGnU",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `paymentId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Provide the ID of the related payment.                                                                   | tr_5B8cwPMGnU                                                                                            |
| `requestBody`                                                                                            | [operations.ReleaseAuthorizationRequestBody](../../models/operations/releaseauthorizationrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |