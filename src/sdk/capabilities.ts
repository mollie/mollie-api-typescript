/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { capabilitiesList } from "../funcs/capabilitiesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Capabilities extends ClientSDK {
  /**
   * List capabilities
   *
   * @remarks
   * > 🚧 Beta feature
   * >
   * > This feature is currently in beta testing, and the final specification may still change.
   *
   * Retrieve a list of capabilities for an organization.
   *
   * This API provides detailed insights into the specific requirements and status of each client's onboarding journey.
   *
   * Capabilities are at the organization level, indicating if the organization can perform a given capability.
   *
   * For payments, regardless them being at the profile level, the capability is listed at the organization level.
   * This means that if at least one of the clients's profiles can receive payments,
   * the payments capability is enabled, communicating that the organization can indeed receive payments.
   */
  async list(
    options?: RequestOptions,
  ): Promise<operations.ListCapabilitiesResponse> {
    return unwrapAsync(capabilitiesList(
      this,
      options,
    ));
  }
}
