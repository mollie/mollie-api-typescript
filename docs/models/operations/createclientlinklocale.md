# CreateClientLinkLocale

Preset the language to be used for the login screen, if applicable. For the consent screen, the preferred
language of the logged in merchant will be used and this parameter is ignored.

When this parameter is omitted, the browser language will be used instead.

## Example Usage

```typescript
import { CreateClientLinkLocale } from "mollie-api-typescript/models/operations";

let value: CreateClientLinkLocale = "en_US";
```

## Values

```typescript
"en_US" | "en_GB" | "nl_NL" | "nl_BE" | "de_DE" | "de_AT" | "de_CH" | "fr_FR" | "fr_BE" | "es_ES" | "ca_ES" | "pt_PT" | "it_IT" | "nb_NO" | "sv_SE" | "fi_FI" | "da_DK" | "is_IS" | "hu_HU" | "pl_PL" | "lv_LV" | "lt_LT"
```