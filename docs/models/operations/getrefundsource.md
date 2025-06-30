# GetRefundSource

Where the funds will be pulled back from.

## Example Usage

```typescript
import { GetRefundSource } from "mollie-api-typescript/models/operations";

let value: GetRefundSource = {
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                                    | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Required for source type `organization`. The ID of the connected organization the funds should be pulled back from. | org_1234567                                                                                                         |