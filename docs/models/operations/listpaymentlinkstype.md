# ListPaymentLinksType

The type of product purchased. For example, a physical or a digital product.

The `tip` payment line type is not available when creating a payment.

## Example Usage

```typescript
import { ListPaymentLinksType } from "mollie-api-typescript/models/operations";

let value: ListPaymentLinksType = "physical";
```

## Values

```typescript
"physical" | "digital" | "shipping_fee" | "discount" | "store_credit" | "gift_card" | "surcharge" | "tip"
```