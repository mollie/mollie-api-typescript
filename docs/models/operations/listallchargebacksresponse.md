# ListAllChargebacksResponse

## Example Usage

```typescript
import { ListAllChargebacksResponse } from "mollie-api-typescript/models/operations";

let value: ListAllChargebacksResponse = {
  result: {
    count: 5,
    embedded: {
      chargebacks: [],
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.ListAllChargebacksResponseBody](../../models/operations/listallchargebacksresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |