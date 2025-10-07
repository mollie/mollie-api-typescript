# EntityBalanceTransferResponseStatusReason

The reason for the current status of the transfer, if applicable.

## Example Usage

```typescript
import { EntityBalanceTransferResponseStatusReason } from "mollie-api-typescript/models";

let value: EntityBalanceTransferResponseStatusReason = {
  code: "insufficient_funds",
  message: "Insufficient funds in the source balance.",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `code`                                                                                         | [models.BalanceTransferStatusReasonResponse](../models/balancetransferstatusreasonresponse.md) | :heavy_check_mark:                                                                             | A machine-readable code that indicates the reason for the transfer's status.                   | insufficient_funds                                                                             |
| `message`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | A description of the status reason, localized according to the transfer.                       | Insufficient funds in the source balance.                                                      |