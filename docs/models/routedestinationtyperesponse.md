# RouteDestinationTypeResponse

The type of destination. Currently only the destination type `organization` is supported.

## Example Usage

```typescript
import { RouteDestinationTypeResponse } from "mollie-api-typescript/models";

let value: RouteDestinationTypeResponse = "organization";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"organization" | Unrecognized<string>
```