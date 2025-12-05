# PaymentMethod

The payment method, if applicable

## Example Usage

```typescript
import { PaymentMethod } from "mollie-api-typescript/models";

let value: PaymentMethod = "creditcard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"alma" | "bacs" | "applepay" | "bancomatpay" | "bancontact" | "banktransfer" | "belfius" | "billie" | "bizum" | "bitcoin" | "blik" | "creditcard" | "directdebit" | "eps" | "giftcard" | "giropay" | "googlepay" | "ideal" | "in3" | "inghomepay" | "kbc" | "klarnapaylater" | "klarnapaynow" | "klarnasliceit" | "klarna" | "mbway" | "mobilepay" | "multibanco" | "mybank" | "paybybank" | "paypal" | "paysafecard" | "przelewy24" | "riverty" | "satispay" | "podiumcadeaukaart" | "pointofsale" | "sofort" | "swish" | "trustly" | "twint" | "vipps" | "voucher" | Unrecognized<string>
```