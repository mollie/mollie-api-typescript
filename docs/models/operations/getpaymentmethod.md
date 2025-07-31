# GetPaymentMethod

The payment method used for this transaction. If a specific method was selected during payment initialization,
this field reflects that choice.

## Example Usage

```typescript
import { GetPaymentMethod } from "mollie-api-typescript/models/operations";

let value: GetPaymentMethod = "ideal";
```

## Values

```typescript
"alma" | "applepay" | "bacs" | "bancomatpay" | "bancontact" | "banktransfer" | "belfius" | "billie" | "blik" | "creditcard" | "directdebit" | "eps" | "giftcard" | "ideal" | "in3" | "kbc" | "klarna" | "mbway" | "multibanco" | "mybank" | "payconiq" | "paypal" | "paysafecard" | "pointofsale" | "przelewy24" | "riverty" | "satispay" | "swish" | "trustly" | "twint" | "voucher"
```