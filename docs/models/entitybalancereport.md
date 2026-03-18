# EntityBalanceReport

## Example Usage

```typescript
import { EntityBalanceReport } from "mollie-api-typescript/models";

let value: EntityBalanceReport = {
  resource: "balance-report",
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  timeZone: "Europe/Amsterdam",
  from: "2025-03-31",
  until: "2025-03-31",
  grouping: "status-balances",
  totals: {
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
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Indicates the response contains a balance report object. Will always contain the string `balance-report` for this<br/>endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | balance-report                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `balanceId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | bal_gVMhHKqSSRYJyPsuoPNFH                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `timeZone`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | The time zone used for the from and until parameters. Currently only time zone `Europe/Amsterdam` is supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Europe/Amsterdam                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `from`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | The start date of the report, in `YYYY-MM-DD` format. The from date is 'inclusive', and in Central European Time.<br/>This means a report with for example `from=2024-01-01` will include movements of 2024-01-01 00:00:00 CET and<br/>onwards.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 2025-03-31                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `until`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | The end date of the report, in `YYYY-MM-DD` format. The until date is 'exclusive', and in Central European Time.<br/>This means a report with for example `until=2024-02-01` will include movements up until 2024-01-31 23:59:59 CET.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 2025-03-31                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `grouping`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [models.BalanceReportGrouping](../models/balancereportgrouping.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | status-balances                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `totals`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [models.Totals](../models/totals.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Totals are grouped according to the chosen grouping rule. The example response should give a good idea of what a<br/>typical grouping looks like.<br/><br/>If grouping `status-balances` is chosen, the main grouping is as follows:<br/><br/>* `pendingBalance` containing an `open`, `pending`, `movedToAvailable`, and `close` sub-group<br/>* `availableBalance` containing an `open`, `movedFromPending`, `immediatelyAvailable`, and `close` sub-group<br/><br/>If grouping `transaction-categories` is chosen, the main grouping is as follows:<br/><br/>* `open` and `close` groups, each containing a `pending` and `available` sub-group<br/>* Transaction type groups such as `payments`, `refunds`, `chargebacks`, `capital`, `transfers`, `fee-prepayments`, `corrections`, `topups`<br/>each containing a `pending`, `movedToAvailable`, and<br/>`immediatelyAvailable` sub-group<br/><br/>Each sub-group typically has:<br/><br/>* An `amount` object containing the group's total amount<br/>* A `count` integer if relevant (for example, counting the number of refunds)<br/>* A `subtotals` array containing more sub-group objects if applicable |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `links`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [models.EntityBalanceReportLinks](../models/entitybalancereportlinks.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |