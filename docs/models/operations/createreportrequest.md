# CreateReportRequest

## Example Usage

```typescript
import { CreateReportRequest } from "mollie-api-typescript/models/operations";
import { RFCDate } from "mollie-api-typescript/types";

let value: CreateReportRequest = {
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
  createReportRequest: {
    reportType: "transaction_margin",
    fromDate: new RFCDate("2026-08-01"),
    untilDate: new RFCDate("2026-08-31"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |
| `createReportRequest`                                                            | [models.CreateReportRequest](../../models/createreportrequest.md)                | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |