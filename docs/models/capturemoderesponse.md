# CaptureModeResponse

Indicate if the funds should be captured immediately or if you want to [place a hold](https://docs.mollie.com/docs/place-a-hold-for-a-payment#/) 
and capture at a later time.

This field needs to be set to `manual` for method `riverty`.

## Example Usage

```typescript
import { CaptureModeResponse } from "mollie-api-typescript/models";

let value: CaptureModeResponse = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "manual" | Unrecognized<string>
```