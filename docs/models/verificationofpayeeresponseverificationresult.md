# VerificationOfPayeeResponseVerificationResult

## Example Usage

```typescript
import { VerificationOfPayeeResponseVerificationResult } from "mollie-api-typescript/models";

let value: VerificationOfPayeeResponseVerificationResult = {
  outcome: "match",
  accountHolderName: "Jan Jansen",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `outcome`                                                            | [models.VerificationResultEnum](../models/verificationresultenum.md) | :heavy_check_mark:                                                   | The result of the Verification of Payee check.                       | matched                                                              |
| `accountHolderName`                                                  | *string*                                                             | :heavy_minus_sign:                                                   | The corrected name if the verification result is `close_match`.      | Jan Jansen                                                           |