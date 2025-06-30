# CreateCaptureNotFoundLinks

## Example Usage

```typescript
import { CreateCaptureNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreateCaptureNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                | [operations.CreateCaptureNotFoundDocumentation](../../models/operations/createcapturenotfounddocumentation.md) | :heavy_check_mark:                                                                                             | The URL to the generic Mollie API error handling guide.                                                        |