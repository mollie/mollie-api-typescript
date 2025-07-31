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
import { Totals } from "mollie-api-typescript/models/operations";

let value: Totals = {
  pendingBalance: {
    open: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      subtotals: [
        {
          subTotals: null,
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
      subtotals: null,
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
      subtotals: null,
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
      subtotals: null,
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
      subtotals: null,
    },
    movedToAvailable: {
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
          subTotals: null,
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
          subTotals: null,
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pendingBalance`                                                                                 | [operations.PendingBalance](../../models/operations/pendingbalance.md)                           | :heavy_minus_sign:                                                                               | The pending balance. Only available if grouping is `status-balances`.                            |
| `availableBalance`                                                                               | [operations.AvailableBalance](../../models/operations/availablebalance.md)                       | :heavy_minus_sign:                                                                               | The available balance. Only available if grouping is `status-balances`.                          |
| `open`                                                                                           | [operations.Open](../../models/operations/open.md)                                               | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `close`                                                                                          | [operations.Close](../../models/operations/close.md)                                             | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `payments`                                                                                       | [operations.GetBalanceReportPayments](../../models/operations/getbalancereportpayments.md)       | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `refunds`                                                                                        | [operations.GetBalanceReportRefunds](../../models/operations/getbalancereportrefunds.md)         | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `chargebacks`                                                                                    | [operations.GetBalanceReportChargebacks](../../models/operations/getbalancereportchargebacks.md) | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `capital`                                                                                        | [operations.Capital](../../models/operations/capital.md)                                         | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `transfers`                                                                                      | [operations.Transfers](../../models/operations/transfers.md)                                     | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `feePrepayments`                                                                                 | [operations.FeePrepayments](../../models/operations/feeprepayments.md)                           | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `corrections`                                                                                    | [operations.Corrections](../../models/operations/corrections.md)                                 | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |
| `topups`                                                                                         | [operations.Topups](../../models/operations/topups.md)                                           | :heavy_minus_sign:                                                                               | Only available on `transaction-categories` grouping.                                             |