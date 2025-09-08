# SalesInvoiceRecipientLocaleResponse

The locale for the recipient, to be used for translations in PDF generation and payment pages.

## Example Usage

```typescript
import { SalesInvoiceRecipientLocaleResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceRecipientLocaleResponse = "nl_NL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"en_US" | "en_GB" | "nl_NL" | "nl_BE" | "de_DE" | "de_AT" | "de_CH" | "fr_FR" | "fr_BE" | Unrecognized<string>
```