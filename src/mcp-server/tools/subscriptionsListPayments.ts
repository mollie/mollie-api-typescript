/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsListPayments } from "../../funcs/subscriptionsListPayments.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListSubscriptionPaymentsRequest$inboundSchema,
};

export const tool$subscriptionsListPayments: ToolDefinition<typeof args> = {
  name: "subscriptions-list-payments",
  description: `List subscription payments

Retrieve all payments of a specific subscription.

The results are paginated.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionsListPayments(
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
