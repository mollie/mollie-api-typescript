# GetBalanceReportLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetBalanceReportLinks } from "mollie-api-typescript/models/operations";

let value: GetBalanceReportLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `self`                                                                                               | [operations.GetBalanceReportSelf](../../models/operations/getbalancereportself.md)                   | :heavy_minus_sign:                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.           |
| `documentation`                                                                                      | [operations.GetBalanceReportDocumentation](../../models/operations/getbalancereportdocumentation.md) | :heavy_minus_sign:                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.           |