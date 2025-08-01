/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentLinksCreate } from "../../funcs/paymentLinksCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreatePaymentLinkRequest$inboundSchema.optional(),
};

export const tool$paymentLinksCreate: ToolDefinition<typeof args> = {
  name: "payment-links-create",
  description: `Create payment link

With the Payment links API you can generate payment links that by default, unlike regular payments, do not expire.
The payment link can be shared with your customers and will redirect them to them the payment page where they can
complete the payment. A [payment](get-payment) will only be created once the customer initiates the payment.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentLinksCreate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
