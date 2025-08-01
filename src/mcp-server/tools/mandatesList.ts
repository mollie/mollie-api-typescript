/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { mandatesList } from "../../funcs/mandatesList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListMandatesRequest$inboundSchema,
};

export const tool$mandatesList: ToolDefinition<typeof args> = {
  name: "mandates-list",
  description: `List mandates

Retrieve a list of all mandates.

The results are paginated.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await mandatesList(
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
