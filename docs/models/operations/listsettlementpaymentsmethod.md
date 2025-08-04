# ListSettlementPaymentsMethod

The payment method used for this transaction. If a specific method was selected during payment initialization,
this field reflects that choice.

## Example Usage

```typescript
import { ListSettlementPaymentsMethod } from "mollie-api-typescript/models/operations";

let value: ListSettlementPaymentsMethod = "ideal";
```

## Values

```typescript
"alma" | "applepay" | "bacs" | "bancomatpay" | "bancontact" | "banktransfer" | "belfius" | "billie" | "bizum" | "blik" | "creditcard" | "directdebit" | "eps" | "giftcard" | "ideal" | "in3" | "kbc" | "klarna" | "klarnapaylater" | "klarnapaynow" | "klarnasliceit" | "mbway" | "multibanco" | "mybank" | "paybybank" | "payconiq" | "paypal" | "paysafecard" | "pointofsale" | "przelewy24" | "riverty" | "satispay" | "swish" | "trustly" | "twint" | "voucher"
```