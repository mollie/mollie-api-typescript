# DisableMethodIssuerRequest

## Example Usage

```typescript
import { DisableMethodIssuerRequest } from "mollie-api-typescript/models/operations";

let value: DisableMethodIssuerRequest = {
  profileId: "pfl_5B8cwPMGnU",
  methodId: "voucher",
  issuerId: "edenred-france-sports",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `profileId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related profile.                                           | pfl_5B8cwPMGnU                                                                   |
| `methodId`                                                                       | [models.MethodIdWithIssuer](../../models/methodidwithissuer.md)                  | :heavy_check_mark:                                                               | Provide the ID of the related payment method.                                    | voucher                                                                          |
| `issuerId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Provide the ID of the related issuer.                                            | edenred-france-sports                                                            |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A unique key to ensure idempotent requests. This key should be a UUID v4 string. | 123e4567-e89b-12d3-a456-426                                                      |