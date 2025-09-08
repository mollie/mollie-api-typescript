# WebhookStatus

The subscription's current status.

## Example Usage

```typescript
import { WebhookStatus } from "mollie-api-typescript/models";

let value: WebhookStatus = "enabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"enabled" | "blocked" | "disabled" | "deleted" | Unrecognized<string>
```