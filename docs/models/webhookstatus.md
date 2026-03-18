# WebhookStatus

The subscription's current status.

## Example Usage

```typescript
import { WebhookStatus } from "mollie-api-typescript/models";

let value: WebhookStatus = "enabled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"enabled" | "blocked" | "disabled" | "deleted" | Unrecognized<string>
```