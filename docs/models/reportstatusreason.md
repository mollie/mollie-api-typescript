# ReportStatusReason

Present when `status` is `failed`. Explains what went wrong.

## Example Usage

```typescript
import { ReportStatusReason } from "mollie-api-typescript/models";

let value: ReportStatusReason = {
  code: "generation_failed",
  message:
    "Something went wrong while generating the report. Try again, or contact support if it keeps happening.",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | A machine-readable code for the failure reason.                                                        | generation_failed                                                                                      |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | A human-readable explanation of why the report failed.                                                 | Something went wrong while generating the report. Try again, or contact support if it keeps happening. |