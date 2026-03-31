# StatusReason2

A human-readable reason explaining the current status of the transfer. Only populated when the transfer has
reached a terminal status of `failed`, `rejected`, or `blocked`.

This field is `null` for transfers that have not reached one of these statuses.

## Example Usage

```typescript
import { StatusReason2 } from "mollie-api-typescript/models";

let value: StatusReason2 = {
  code: "insufficient-funds",
  message: "The creditor account does not exist.",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                               | [models.StatusReasonCodeResponse](../models/statusreasoncoderesponse.md)                                             | :heavy_minus_sign:                                                                                                   | A machine-readable code indicating the reason for the transfer's terminal status.                                    | insufficient-funds                                                                                                   |
| `message`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Provides further details about failure indicated. This field is only populated if the`code` field is set to `error`. | The creditor account does not exist.                                                                                 |