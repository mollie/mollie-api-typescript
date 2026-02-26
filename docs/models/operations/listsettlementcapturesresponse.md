# ListSettlementCapturesResponse

## Example Usage

```typescript
import { ListSettlementCapturesResponse } from "mollie-api-typescript/models/operations";

let value: ListSettlementCapturesResponse = {
  result: {
    count: 5,
    embedded: {
      captures: [],
    },
    links: {
      self: {
        href: "https://...",
        type: "application/hal+json",
      },
      previous: {
        href: "https://...",
        type: "application/hal+json",
      },
      next: {
        href: "https://...",
        type: "application/hal+json",
      },
      documentation: {
        href: "https://...",
        type: "application/hal+json",
      },
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.ListSettlementCapturesResponseBody](../../models/operations/listsettlementcapturesresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |