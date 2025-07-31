# CreateCustomerLocaleRequest

Preconfigure the language to be used in the hosted payment pages shown to the customer. Should only be provided if
absolutely necessary. If not provided, the browser language will be used which is typically highly accurate.

## Example Usage

```typescript
import { CreateCustomerLocaleRequest } from "mollie-api-typescript/models/operations";

let value: CreateCustomerLocaleRequest = "en_US";
```

## Values

```typescript
"en_US" | "en_GB" | "nl_NL" | "nl_BE" | "de_DE" | "de_AT" | "de_CH" | "fr_FR" | "fr_BE" | "es_ES" | "ca_ES" | "pt_PT" | "it_IT" | "nb_NO" | "sv_SE" | "fi_FI" | "da_DK" | "is_IS" | "hu_HU" | "pl_PL" | "lv_LV" | "lt_LT"
```