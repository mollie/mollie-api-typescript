# ListPaymentsLocale

Allows you to preset the language to be used in the hosted payment pages shown to the customer. Setting a locale
is highly recommended and will greatly improve your conversion rate. When this parameter is omitted the browser
language will be used instead if supported by the payment method. You can provide any `xx_XX` format ISO 15897
locale, but our hosted payment pages currently only support the specified languages.

For bank transfer payments specifically, the locale will determine the target bank account the customer has to
transfer the money to. We have dedicated bank accounts for Belgium, Germany, and The Netherlands. Having the
customer use a local bank account greatly increases the conversion and speed of payment.

## Example Usage

```typescript
import { ListPaymentsLocale } from "mollie-api-typescript/models/operations";

let value: ListPaymentsLocale = "en_US";
```

## Values

```typescript
"en_US" | "en_GB" | "nl_NL" | "nl_BE" | "de_DE" | "de_AT" | "de_CH" | "fr_FR" | "fr_BE" | "es_ES" | "ca_ES" | "pt_PT" | "it_IT" | "nb_NO" | "sv_SE" | "fi_FI" | "da_DK" | "is_IS" | "hu_HU" | "pl_PL" | "lv_LV" | "lt_LT"
```