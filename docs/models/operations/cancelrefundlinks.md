# CancelRefundLinks

## Example Usage

```typescript
import { CancelRefundLinks } from "mollie-api-typescript/models/operations";

let value: CancelRefundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `documentation`                                                                              | [operations.CancelRefundDocumentation](../../models/operations/cancelrefunddocumentation.md) | :heavy_check_mark:                                                                           | The URL to the generic Mollie API error handling guide.                                      |