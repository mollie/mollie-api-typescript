# ListMethodsLocale

Passing a locale will sort the payment methods in the preferred order
for the country, and translate the payment method names in the corresponding language.

## Example Usage

```typescript
import { ListMethodsLocale } from "mollie-api-typescript/models/operations";

let value: ListMethodsLocale = "en_US";
```

## Values

```typescript
"en_US" | "en_GB" | "nl_NL" | "nl_BE" | "de_DE" | "de_AT" | "de_CH" | "fr_FR" | "fr_BE" | "es_ES" | "ca_ES" | "pt_PT" | "it_IT" | "nb_NO" | "sv_SE" | "fi_FI" | "da_DK" | "is_IS" | "hu_HU" | "pl_PL" | "lv_LV" | "lt_LT"
```