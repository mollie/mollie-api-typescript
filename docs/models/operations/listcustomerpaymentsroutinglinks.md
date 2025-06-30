# ListCustomerPaymentsRoutingLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListCustomerPaymentsRoutingLinks } from "mollie-api-typescript/models/operations";

let value: ListCustomerPaymentsRoutingLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  payment: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                         | [operations.ListCustomerPaymentsRoutingSelf](../../models/operations/listcustomerpaymentsroutingself.md)       | :heavy_check_mark:                                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                     |
| `payment`                                                                                                      | [operations.ListCustomerPaymentsRoutingPayment](../../models/operations/listcustomerpaymentsroutingpayment.md) | :heavy_check_mark:                                                                                             | The API resource URL of the [payment](get-payment) that belong to this route.                                  |