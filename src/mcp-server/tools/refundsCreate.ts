/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { refundsCreate } from "../../funcs/refundsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateRefundRequest$inboundSchema,
};

export const tool$refundsCreate: ToolDefinition<typeof args> = {
  name: "refunds-create",
  description: `Create payment refund

Creates a refund for a specific payment. The refunded amount is credited to your customer usually either via a bank
transfer or by refunding the amount to your customer's credit card.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await refundsCreate(
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
