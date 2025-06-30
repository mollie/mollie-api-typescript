# GetPaymentInclude

This endpoint allows you to include additional information via the `include` query string parameter.

## Example Usage

```typescript
import { GetPaymentInclude } from "mollie-api-typescript/models/operations";

let value: GetPaymentInclude = "details.qrCode";
```

## Values

```typescript
"details.qrCode" | "details.remainderDetails"
```