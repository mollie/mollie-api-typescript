# ReportStatusReason

Present when `status` is `failed`. Explains what went wrong.

## Example Usage

```typescript
import { ReportStatusReason } from "mollie-api-typescript/models";

let value: ReportStatusReason = {
  code: "generation-failed",
  message:
    "An error occurred while generating the report. Please try again or contact support if the issue persists.",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                    | [models.ReportStatusReasonCode](../models/reportstatusreasoncode.md)                                      | :heavy_check_mark:                                                                                        | A machine-readable code for the failure reason.                                                           | generation-failed                                                                                         |
| `message`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | A human-readable explanation of why the report failed.                                                    | An error occurred while generating the report. Please try again or contact support if the issue persists. |