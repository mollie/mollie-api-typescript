# SessionRequestShippingUnion

> 🚧 Private beta
>
> This property is currently in private beta, and the final specification may still change.

Shipping information for the Checkout Session. Provide either `options` or `callbackUrl`, not both.

The `lines` of the Checkout Session must not contain a line with type `shipping_fee`. When `shipping` is set,
`requiredCustomerDetails` must contain `shipping-address`.


## Supported Types

### `models.SessionRequestShipping1`

```typescript
const value: models.SessionRequestShipping1 = {
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

### `models.SessionRequestShipping2`

```typescript
const value: models.SessionRequestShipping2 = {
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

