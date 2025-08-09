# UpdatePaymentLinkTypeRequest

The type of product purchased. For example, a physical or a digital product.

The `tip` payment line type is not available when creating a payment.

## Example Usage

```typescript
import { UpdatePaymentLinkTypeRequest } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentLinkTypeRequest = "physical";
```

## Values

```typescript
"physical" | "digital" | "shipping_fee" | "discount" | "store_credit" | "gift_card" | "surcharge" | "tip"
```