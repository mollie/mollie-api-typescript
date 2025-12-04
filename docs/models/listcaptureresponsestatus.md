# ListCaptureResponseStatus

The capture's status.

## Example Usage

```typescript
import { ListCaptureResponseStatus } from "mollie-api-typescript/models";

let value: ListCaptureResponseStatus = "succeeded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "succeeded" | "failed" | Unrecognized<string>
```