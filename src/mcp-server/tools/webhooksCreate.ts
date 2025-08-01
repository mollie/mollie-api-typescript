/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksCreate } from "../../funcs/webhooksCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateWebhookRequest$inboundSchema.optional(),
};

export const tool$webhooksCreate: ToolDefinition<typeof args> = {
  name: "webhooks-create",
  description: `Create a webhook

A webhook must have a name, an url and a list of event types. You can also create webhooks in the webhooks settings section of the Dashboard.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await webhooksCreate(
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
