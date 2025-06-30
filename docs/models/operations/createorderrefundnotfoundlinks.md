# CreateOrderRefundNotFoundLinks

## Example Usage

```typescript
import { CreateOrderRefundNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreateOrderRefundNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                        | [operations.CreateOrderRefundNotFoundDocumentation](../../models/operations/createorderrefundnotfounddocumentation.md) | :heavy_check_mark:                                                                                                     | The URL to the generic Mollie API error handling guide.                                                                |