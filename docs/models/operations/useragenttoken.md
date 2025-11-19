# UserAgentToken

## Example Usage

```typescript
import { UserAgentToken } from "mollie-api-typescript/models/operations";

let value: UserAgentToken = {
  startsAt: "2024-01-01T00:00:00+00:00",
  endsAt: "2024-12-31T23:59:59+00:00",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The unique User-Agent token.                                                                                                   | ...                                                                                                                            |
| `startsAt`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The date from which the token is active, in ISO 8601 format.                                                                   | 2024-01-01T00:00:00+00:00                                                                                                      |
| `endsAt`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The date until when the token will be active, in ISO 8601 format. Will be `null` if the token<br/>does not have an end date (yet). | 2024-12-31T23:59:59+00:00                                                                                                      |