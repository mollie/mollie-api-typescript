# CreateWebhookLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateWebhookLinks } from "mollie-api-typescript/models/operations";

let value: CreateWebhookLinks = {
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `documentation`                                                                                | [operations.CreateWebhookDocumentation](../../models/operations/createwebhookdocumentation.md) | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |