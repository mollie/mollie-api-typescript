# ListCapabilitiesEmbedded

## Example Usage

```typescript
import { ListCapabilitiesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListCapabilitiesEmbedded = {
  capabilities: [
    {
      resource: "capability",
      name: "payments",
      status: "pending",
      statusReason: "requirement-past-due",
      requirements: [],
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `capabilities`                                                | [models.EntityCapability](../../models/entitycapability.md)[] | :heavy_check_mark:                                            | N/A                                                           |