# GetPartnerStatusResponse

The partner status object.

## Example Usage

```typescript
import { GetPartnerStatusResponse } from "mollie-api-typescript/models/operations";

let value: GetPartnerStatusResponse = {
  partnerType: "<value>",
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    signuplink: {
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

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                                                                 | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | Indicates the response contains a partner status object. Will always contain the string `partner` for this endpoint.                                                       |
| `partnerType`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Indicates the type of partner. Will be `null` if the currently authenticated organization is not enrolled as a partner.<br/><br/>Possible values: `oauth` `signuplink` `useragent` |
| `isCommissionPartner`                                                                                                                                                      | *boolean*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                         | Whether the current organization is receiving commissions.                                                                                                                 |
| `userAgentTokens`                                                                                                                                                          | [operations.UserAgentToken](../../models/operations/useragenttoken.md)[]                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | Array of User-Agent token objects. Present if the organization is a partner of type `useragent`, or if they were in the past.                                              |
| `partnerContractSignedAt`                                                                                                                                                  | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | The date the partner contract was signed, in ISO 8601 format. Omitted if no contract has been signed (yet).                                                                |
| `partnerContractUpdateAvailable`                                                                                                                                           | *boolean*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                         | Whether an update to the partner contract is available and requiring the organization's agreement.                                                                         |
| `partnerContractExpiresAt`                                                                                                                                                 | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | The expiration date of the signed partner contract, in ISO 8601 format. Omitted if contract has no expiration date (yet).                                                  |
| `links`                                                                                                                                                                    | [operations.GetPartnerStatusLinks](../../models/operations/getpartnerstatuslinks.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                         | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                                                                          |