# UserAgentToken

## Example Usage

```typescript
import { UserAgentToken } from "mollie-api-typescript/models/operations";

let value: UserAgentToken = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The unique User-Agent token.                                                                                                   |
| `startsAt`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The date from which the token is active, in ISO 8601 format.                                                                   |
| `endsAt`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The date until when the token will be active, in ISO 8601 format. Will be `null` if the token<br/>does not have an end date (yet). |