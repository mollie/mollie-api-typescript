# SourceRequest

Where the funds will be pulled back from.

## Example Usage

```typescript
import { SourceRequest } from "mollie-api-typescript/models/operations";

let value: SourceRequest = {
  type: "organization",
  organizationId: "org_1234567",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                              | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The type of source. Currently only the source type `organization` is supported.<br/><br/>Possible values: `organization` | organization                                                                                                        |
| `organizationId`                                                                                                    | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Required for source type `organization`. The ID of the connected organization the funds should be pulled back from. | org_1234567                                                                                                         |