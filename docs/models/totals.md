# Totals

Totals are grouped according to the chosen grouping rule. The example response should give a good idea of what a
typical grouping looks like.

If grouping `status-balances` is chosen, the main grouping is as follows:

* `pendingBalance` containing an `open`, `pending`, `movedToAvailable`, and `close` sub-group
* `availableBalance` containing an `open`, `movedFromPending`, `immediatelyAvailable`, and `close` sub-group

If grouping `transaction-categories` is chosen, the main grouping is as follows:

* `open` and `close` groups, each containing a `pending` and `available` sub-group
* Transaction type groups such as `payments`, `refunds`, `chargebacks`, `capital`, `transfers`, `fee-prepayments`, `corrections`, `topups`
each containing a `pending`, `movedToAvailable`, and
`immediatelyAvailable` sub-group

Each sub-group typically has:

* An `amount` object containing the group's total amount
* A `count` integer if relevant (for example, counting the number of refunds)
* A `subtotals` array containing more sub-group objects if applicable

## Example Usage

```typescript
import { Totals } from "mollie-api-typescript/models";

let value: Totals = {
  pendingBalance: {
    open: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    close: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
  },
  availableBalance: {
    open: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedFromPending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    close: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  open: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    available: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  close: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    available: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  payments: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  refunds: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  chargebacks: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  capital: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  transfers: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  feePrepayments: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  corrections: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
  topups: {
    pending: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
    movedToAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: null,
    },
    immediatelyAvailable: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: [
            {
              count: 50,
              method: "creditcard",
              cardIssuer: "amex",
              cardAudience: "other",
              cardRegion: "domestic",
              feeType: "payment-fee",
              prepaymentPartType: "fee",
              transactionType: "payment",
            },
          ],
          count: 50,
          method: "creditcard",
          cardIssuer: "amex",
          cardAudience: "other",
          cardRegion: "domestic",
          feeType: "payment-fee",
          prepaymentPartType: "fee",
          transactionType: "payment",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `pendingBalance`                                                        | [models.PendingBalance](../models/pendingbalance.md)                    | :heavy_minus_sign:                                                      | The pending balance. Only available if grouping is `status-balances`.   |
| `availableBalance`                                                      | [models.AvailableBalance](../models/availablebalance.md)                | :heavy_minus_sign:                                                      | The available balance. Only available if grouping is `status-balances`. |
| `open`                                                                  | [models.Open](../models/open.md)                                        | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `close`                                                                 | [models.Close](../models/close.md)                                      | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `payments`                                                              | [models.Payments](../models/payments.md)                                | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `refunds`                                                               | [models.Refunds](../models/refunds.md)                                  | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `chargebacks`                                                           | [models.Chargebacks](../models/chargebacks.md)                          | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `capital`                                                               | [models.Capital](../models/capital.md)                                  | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `transfers`                                                             | [models.Transfers](../models/transfers.md)                              | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `feePrepayments`                                                        | [models.FeePrepayments](../models/feeprepayments.md)                    | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `corrections`                                                           | [models.Corrections](../models/corrections.md)                          | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |
| `topups`                                                                | [models.Topups](../models/topups.md)                                    | :heavy_minus_sign:                                                      | Only available on `transaction-categories` grouping.                    |