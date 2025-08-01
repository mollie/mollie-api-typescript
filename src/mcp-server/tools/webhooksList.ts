/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksList } from "../../funcs/webhooksList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListWebhooksRequest$inboundSchema.optional(),
};

export const tool$webhooksList: ToolDefinition<typeof args> = {
  name: "webhooks-list",
  description: `List all webhooks

Returns a paginated list of your webhooks. If no webhook endpoints are available, the resulting array will be empty. This request should never throw an error.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await webhooksList(
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
