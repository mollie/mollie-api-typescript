# OrderLineCategories

A comma-separated list of the line categories you support in your checkout.

Example: `/v2/methods?orderLineCategories=eco,meal`

## Example Usage

```typescript
import { OrderLineCategories } from "mollie-api-typescript/models/operations";

let value: OrderLineCategories = "eco";
```

## Values

```typescript
"eco" | "gift" | "meal" | "sport_culture" | "additional" | "consume"
```