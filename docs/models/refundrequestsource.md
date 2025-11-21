# RefundRequestSource

Where the funds will be pulled back from.

## Example Usage

```typescript
import { RefundRequestSource } from "mollie-api-typescript/models";

let value: RefundRequestSource = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `type`                           | [models.Type](../models/type.md) | :heavy_minus_sign:               | N/A                              | organization                     |
| `organizationId`                 | *string*                         | :heavy_minus_sign:               | N/A                              | org_1234567                      |