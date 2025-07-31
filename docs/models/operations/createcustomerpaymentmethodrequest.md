# CreateCustomerPaymentMethodRequest

Normally, a payment method screen is shown. However, when using this parameter, you can choose a specific payment
method and your customer will skip the selection screen and is sent directly to the chosen payment method. The
parameter enables you to fully integrate the payment method selection into your website.

You can also specify the methods in an array. By doing so we will still show the payment method selection screen
but will only show the methods specified in the array. For example, you can use this functionality to only show
payment methods from a specific country to your customer `['bancontact', 'belfius']`.

## Example Usage

```typescript
import { CreateCustomerPaymentMethodRequest } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentMethodRequest = "ideal";
```

## Values

```typescript
"alma" | "applepay" | "bacs" | "bancomatpay" | "bancontact" | "banktransfer" | "belfius" | "billie" | "blik" | "creditcard" | "directdebit" | "eps" | "giftcard" | "ideal" | "in3" | "kbc" | "klarna" | "mbway" | "multibanco" | "mybank" | "payconiq" | "paypal" | "paysafecard" | "pointofsale" | "przelewy24" | "riverty" | "satispay" | "swish" | "trustly" | "twint" | "voucher"
```