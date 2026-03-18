# ListEntityMethodAllId

The unique identifier of the payment method. When used during [payment creation](create-payment), the payment
method selection screen will be skipped.

## Example Usage

```typescript
import { ListEntityMethodAllId } from "mollie-api-typescript/models";

let value: ListEntityMethodAllId = "ideal";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"alma" | "applepay" | "bacs" | "bancomatpay" | "bancontact" | "banktransfer" | "belfius" | "billie" | "bizum" | "blik" | "creditcard" | "directdebit" | "eps" | "giftcard" | "ideal" | "in3" | "kbc" | "klarna" | "mbway" | "mobilepay" | "multibanco" | "mybank" | "paybybank" | "paypal" | "paysafecard" | "przelewy24" | "riverty" | "satispay" | "swish" | "trustly" | "twint" | "vipps" | "voucher" | Unrecognized<string>
```