# CreateRefundNotFoundLinks

## Example Usage

```typescript
import { CreateRefundNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreateRefundNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                              | [operations.CreateRefundNotFoundDocumentation](../../models/operations/createrefundnotfounddocumentation.md) | :heavy_check_mark:                                                                                           | The URL to the generic Mollie API error handling guide.                                                      |