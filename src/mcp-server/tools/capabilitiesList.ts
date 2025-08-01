/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { capabilitiesList } from "../../funcs/capabilitiesList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$capabilitiesList: ToolDefinition = {
  name: "capabilities-list",
  description: `List capabilities

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a list of capabilities for an organization.

This API provides detailed insights into the specific requirements and status of each client's onboarding journey.

Capabilities are at the organization level, indicating if the organization can perform a given capability.

For payments, regardless them being at the profile level, the capability is listed at the organization level.
This means that if at least one of the clients's profiles can receive payments,
the payments capability is enabled, communicating that the organization can indeed receive payments.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await capabilitiesList(
      client,
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
