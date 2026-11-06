# GetReportRequest

## Example Usage

```typescript
import { GetReportRequest } from "mollie-api-typescript/models/operations";

let value: GetReportRequest = {
  reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `reportId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related report.                                            | rpt_XRAG3v9EUyCDcX99pJ2Vc                                                        |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |