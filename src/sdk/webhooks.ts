/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksCreate } from "../funcs/webhooksCreate.js";
import { webhooksDelete } from "../funcs/webhooksDelete.js";
import { webhooksGet } from "../funcs/webhooksGet.js";
import { webhooksList } from "../funcs/webhooksList.js";
import { webhooksTest } from "../funcs/webhooksTest.js";
import { webhooksUpdate } from "../funcs/webhooksUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Webhooks extends ClientSDK {
  /**
   * Create a webhook
   *
   * @remarks
   * A webhook must have a name, an url and a list of event types. You can also create webhooks in the webhooks settings section of the Dashboard.
   *
   * > 🔑 Access with
   * >
   * > [Access token with **webhooks.write**](/reference/authentication)
   */
  async create(
    request?: operations.CreateWebhookRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateWebhookResponse> {
    return unwrapAsync(webhooksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * List all webhooks
   *
   * @remarks
   * Returns a paginated list of your webhooks. If no webhook endpoints are available, the resulting array will be empty. This request should never throw an error.
   *
   * > 🔑 Access with
   * >
   * > [Access token with **webhooks.read**](/reference/authentication)
   */
  async list(
    request?: operations.ListWebhooksRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.ListWebhooksResponse> {
    return unwrapAsync(webhooksList(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Updates the webhook. You may edit the name, url and the list of subscribed event types.
   *
   * > 🔑 Access with
   * >
   * > [Access token with **webhooks.write**](/reference/authentication)
   */
  async update(
    request: operations.UpdateWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateWebhookResponse> {
    return unwrapAsync(webhooksUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a webhook
   *
   * @remarks
   * Retrieve a single webhook object by its ID.
   *
   * > 🔑 Access with
   * >
   * > [Access token with **webhooks.read**](/reference/authentication)
   */
  async get(
    request: operations.GetWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWebhookResponse> {
    return unwrapAsync(webhooksGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a webhook
   *
   * @remarks
   * Delete a single webhook object by its webhook ID.
   *
   * > 🔑 Access with
   * >
   * > [Access token with **webhooks.write**](/reference/authentication)
   */
  async delete(
    request: operations.DeleteWebhookRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(webhooksDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Test a webhook
   *
   * @remarks
   * Sends a test event to the webhook to verify the endpoint is working as expected.
   *
   * > 🔑 Access with
   * >
   * > [Access token with **webhooks.write**](/reference/authentication)
   */
  async test(
    request: operations.TestWebhookRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(webhooksTest(
      this,
      request,
      options,
    ));
  }
}
