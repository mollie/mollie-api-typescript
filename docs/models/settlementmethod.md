# SettlementMethod

The method the cost or revenue subtotal applies to. This is usually a payment method, but can also represent a
correction or transaction type that is not tied to a specific payment method.

## Example Usage

```typescript
import { SettlementMethod } from "mollie-api-typescript/models";

let value: SettlementMethod = "creditcard";
```

## Values

```typescript
"alma" | "applicationfee" | "authorizationreversal" | "bacs" | "bancomatpay" | "bancontact" | "banktransfer" | "belfius" | "billie" | "billink" | "bitcoin" | "bizum" | "blik" | "capture" | "chargeback" | "creditcard" | "directdebit" | "eps" | "giftcard" | "giropay" | "ideal" | "in3" | "inghomepay" | "kbc" | "kickback" | "klarna" | "klarnapaylater" | "klarnapaynow" | "klarnasliceit" | "mbway" | "mobilepay" | "multibanco" | "mybank" | "paybybank" | "paypal" | "paysafecard" | "podiumcadeaukaart" | "pointofsale" | "przelewy24" | "refund" | "riverty" | "rollingreserve" | "satispay" | "shiftedfee" | "sofort" | "swish" | "trustly" | "twint" | "vipps" | "voucher"
```