# Grouping

You can retrieve reports in two different formats. With the `status-balances` format, transactions are grouped by
status (e.g. `pending`, `available`), then by direction of movement (e.g. moved from pending to available), then
by transaction type, and then by other sub-groupings where available (e.g. payment method).

With the `transaction-categories` format, transactions are grouped by transaction type, then by direction of
movement, and then again by other sub-groupings where available.

Both reporting formats will always contain opening and closing amounts that correspond to the start and end dates
of the report.

## Example Usage

```typescript
import { Grouping } from "mollie-api-typescript/models";

let value: Grouping = "status-balances";
```

## Values

```typescript
"status-balances" | "transaction-categories"
```