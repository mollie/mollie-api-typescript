/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersGet } from "../../funcs/customersGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCustomerRequest$inboundSchema,
};

export const tool$customersGet: ToolDefinition<typeof args> = {
  name: "customers-get",
  description: `Get customer

Retrieve a single customer by its ID.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await customersGet(
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
