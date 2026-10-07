# SessionResponseShippingUnion

> 🚧 Private beta
>
> This property is currently in private beta, and the final specification may still change.

Shipping information for the Checkout Session. Provide either `options` or `callbackUrl`, not both.

The `lines` of the Checkout Session must not contain a line with type `shipping_fee`. When `shipping` is set,
`requiredCustomerDetails` must contain `shipping-address`.


## Supported Types

### `models.SessionResponseShipping1`

```typescript
const value: models.SessionResponseShipping1 = {
  options: [],
  callbackUrl: "https://example.org/shipping-options",
};
```

### `models.SessionResponseShipping2`

```typescript
const value: models.SessionResponseShipping2 = {
  options: [
    {
      description: "Next day delivery",
      reference: "express",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
    },
  ],
  callbackUrl: "https://example.org/shipping-options",
};
```

