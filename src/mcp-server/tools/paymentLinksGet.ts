/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentLinksGet } from "../../funcs/paymentLinksGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetPaymentLinkRequest$inboundSchema,
};

export const tool$paymentLinksGet: ToolDefinition<typeof args> = {
  name: "payment-links-get",
  description: `Get payment link

Retrieve a single payment link by its ID.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentLinksGet(
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
