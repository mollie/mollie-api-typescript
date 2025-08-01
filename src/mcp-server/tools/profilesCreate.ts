/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { profilesCreate } from "../../funcs/profilesCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateProfileRequest$inboundSchema,
};

export const tool$profilesCreate: ToolDefinition<typeof args> = {
  name: "profiles-create",
  description: `Create profile

Create a profile to process payments on.

Profiles are required for payment processing. Normally they are created via the Mollie dashboard. Alternatively, you
can use this endpoint to automate profile creation.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await profilesCreate(
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
