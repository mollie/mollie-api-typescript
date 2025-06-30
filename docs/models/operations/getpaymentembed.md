# GetPaymentEmbed

This endpoint allows embedding related API items by appending the following values via the `embed` query string parameter.

## Example Usage

```typescript
import { GetPaymentEmbed } from "mollie-api-typescript/models/operations";

let value: GetPaymentEmbed = "captures";
```

## Values

```typescript
"captures" | "refunds" | "chargebacks"
```