# GetPartnerStatusResponse

The partner status object.

## Example Usage

```typescript
import { GetPartnerStatusResponse } from "mollie-api-typescript/models/operations";

let value: GetPartnerStatusResponse = {
  partnerType: "useragent",
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Indicates the response contains a partner status object. Will always contain the string `partner` for<br/>this endpoint.      |
| `partnerType`                                                                                                                 | [operations.PartnerType](../../models/operations/partnertype.md)                                                              | :heavy_check_mark:                                                                                                            | Indicates the type of partner. Will be `null` if the currently authenticated organization is not<br/>enrolled as a partner.   |
| `isCommissionPartner`                                                                                                         | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether the current organization is receiving commissions.                                                                    |
| `userAgentTokens`                                                                                                             | [operations.UserAgentToken](../../models/operations/useragenttoken.md)[]                                                      | :heavy_minus_sign:                                                                                                            | Array of User-Agent token objects. Present if the organization is a partner of type `useragent`, or if<br/>they were in the past. |
| `partnerContractSignedAt`                                                                                                     | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The date the partner contract was signed, in ISO 8601 format. Omitted if no contract has been signed<br/>(yet).               |
| `partnerContractUpdateAvailable`                                                                                              | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether an update to the partner contract is available and requiring the organization's agreement.                            |
| `partnerContractExpiresAt`                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The expiration date of the signed partner contract, in ISO 8601 format. Omitted if contract has no<br/>expiration date (yet). |
| `links`                                                                                                                       | [operations.GetPartnerStatusLinks](../../models/operations/getpartnerstatuslinks.md)                                          | :heavy_minus_sign:                                                                                                            | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                             |