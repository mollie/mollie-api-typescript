# SessionRequestPayment

## Example Usage

```typescript
import { SessionRequestPayment } from "mollie-api-typescript/models";

let value: SessionRequestPayment = {
  webhookUrl: "https://example.org/webhook",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `webhookUrl`                                                                                                                                                    | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The webhook URL where we will send payment status updates to.<br/><br/>This URL will be automatically set as the webhook URL for all payments created for this session. | https://example.org/webhook                                                                                                                                     |