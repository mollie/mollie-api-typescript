# LocaleResponse

Allows you to preset the language to be used.

## Example Usage

```typescript
import { LocaleResponse } from "mollie-api-typescript/models";

let value: LocaleResponse = "en_US";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"en_US" | "en_GB" | "nl_NL" | "nl_BE" | "de_DE" | "de_AT" | "de_CH" | "fr_FR" | "fr_BE" | "es_ES" | "ca_ES" | "pt_PT" | "it_IT" | "nb_NO" | "sv_SE" | "fi_FI" | "da_DK" | "is_IS" | "hu_HU" | "pl_PL" | "lv_LV" | "lt_LT" | Unrecognized<string>
```