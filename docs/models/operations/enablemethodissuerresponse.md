# EnableMethodIssuerResponse

The payment method issuer object.


## Supported Types

### `models.Giftcard`

```typescript
const value: models.Giftcard = {
  resource: "issuer",
  id: "festivalcadeau",
  description: "FestivalCadeau Giftcard",
  status: "activated",
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

### `models.Voucher`

```typescript
const value: models.Voucher = {
  resource: "issuer",
  id: "edenred-belgium-eco",
  name: "Edenred Eco",
  image: {
    size1x: "https://...",
    size2x: "https://...",
    svg: "https://...",
  },
  status: "activated",
  contractor: {
    id: "Apetiz",
    name: "Apetiz",
    contractId: "someContractId",
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

