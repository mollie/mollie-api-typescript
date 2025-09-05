# PaymentLineItemResponseType

The type of product purchased. For example, a physical or a digital product.

The `tip` payment line type is not available when creating a payment.

## Example Usage

```typescript
import { PaymentLineItemResponseType } from "mollie-api-typescript/models";

let value: PaymentLineItemResponseType = "physical";
```

## Values

```typescript
"physical" | "digital" | "shipping_fee" | "discount" | "store_credit" | "gift_card" | "surcharge" | "tip"
```