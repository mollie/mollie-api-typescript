# ReleaseAuthorizationUnprocessableEntityLinks

## Example Usage

```typescript
import { ReleaseAuthorizationUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: ReleaseAuthorizationUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                                    | [operations.ReleaseAuthorizationUnprocessableEntityDocumentation](../../models/operations/releaseauthorizationunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                                 | The URL to the generic Mollie API error handling guide.                                                                                            |