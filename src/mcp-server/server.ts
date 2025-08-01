/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ClientCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$balancesGet } from "./tools/balancesGet.js";
import { tool$balancesGetPrimary } from "./tools/balancesGetPrimary.js";
import { tool$balancesGetReport } from "./tools/balancesGetReport.js";
import { tool$balancesList } from "./tools/balancesList.js";
import { tool$balancesListTransactions } from "./tools/balancesListTransactions.js";
import { tool$capabilitiesList } from "./tools/capabilitiesList.js";
import { tool$capturesCreate } from "./tools/capturesCreate.js";
import { tool$capturesGet } from "./tools/capturesGet.js";
import { tool$capturesList } from "./tools/capturesList.js";
import { tool$chargebacksAll } from "./tools/chargebacksAll.js";
import { tool$chargebacksGet } from "./tools/chargebacksGet.js";
import { tool$chargebacksList } from "./tools/chargebacksList.js";
import { tool$clientLinksCreate } from "./tools/clientLinksCreate.js";
import { tool$clientsGet } from "./tools/clientsGet.js";
import { tool$clientsList } from "./tools/clientsList.js";
import { tool$customersCreate } from "./tools/customersCreate.js";
import { tool$customersCreatePayment } from "./tools/customersCreatePayment.js";
import { tool$customersDelete } from "./tools/customersDelete.js";
import { tool$customersGet } from "./tools/customersGet.js";
import { tool$customersList } from "./tools/customersList.js";
import { tool$customersListPayments } from "./tools/customersListPayments.js";
import { tool$customersUpdate } from "./tools/customersUpdate.js";
import { tool$delayedRoutingCreate } from "./tools/delayedRoutingCreate.js";
import { tool$delayedRoutingList } from "./tools/delayedRoutingList.js";
import { tool$invoicesGet } from "./tools/invoicesGet.js";
import { tool$invoicesList } from "./tools/invoicesList.js";
import { tool$mandatesCreate } from "./tools/mandatesCreate.js";
import { tool$mandatesGet } from "./tools/mandatesGet.js";
import { tool$mandatesList } from "./tools/mandatesList.js";
import { tool$mandatesRevoke } from "./tools/mandatesRevoke.js";
import { tool$methodsAll } from "./tools/methodsAll.js";
import { tool$methodsGet } from "./tools/methodsGet.js";
import { tool$methodsList } from "./tools/methodsList.js";
import { tool$onboardingGet } from "./tools/onboardingGet.js";
import { tool$onboardingSubmit } from "./tools/onboardingSubmit.js";
import { tool$organizationsGet } from "./tools/organizationsGet.js";
import { tool$organizationsGetCurrent } from "./tools/organizationsGetCurrent.js";
import { tool$organizationsGetPartner } from "./tools/organizationsGetPartner.js";
import { tool$paymentLinksCreate } from "./tools/paymentLinksCreate.js";
import { tool$paymentLinksDelete } from "./tools/paymentLinksDelete.js";
import { tool$paymentLinksGet } from "./tools/paymentLinksGet.js";
import { tool$paymentLinksList } from "./tools/paymentLinksList.js";
import { tool$paymentLinksListPayments } from "./tools/paymentLinksListPayments.js";
import { tool$paymentLinksUpdate } from "./tools/paymentLinksUpdate.js";
import { tool$paymentsCancel } from "./tools/paymentsCancel.js";
import { tool$paymentsCreate } from "./tools/paymentsCreate.js";
import { tool$paymentsGet } from "./tools/paymentsGet.js";
import { tool$paymentsList } from "./tools/paymentsList.js";
import { tool$paymentsReleaseAuthorization } from "./tools/paymentsReleaseAuthorization.js";
import { tool$paymentsUpdate } from "./tools/paymentsUpdate.js";
import { tool$permissionsGet } from "./tools/permissionsGet.js";
import { tool$permissionsList } from "./tools/permissionsList.js";
import { tool$profilesCreate } from "./tools/profilesCreate.js";
import { tool$profilesDelete } from "./tools/profilesDelete.js";
import { tool$profilesGet } from "./tools/profilesGet.js";
import { tool$profilesGetCurrent } from "./tools/profilesGetCurrent.js";
import { tool$profilesList } from "./tools/profilesList.js";
import { tool$profilesUpdate } from "./tools/profilesUpdate.js";
import { tool$refundsAll } from "./tools/refundsAll.js";
import { tool$refundsCancel } from "./tools/refundsCancel.js";
import { tool$refundsCreate } from "./tools/refundsCreate.js";
import { tool$refundsGet } from "./tools/refundsGet.js";
import { tool$refundsList } from "./tools/refundsList.js";
import { tool$salesInvoicesCreate } from "./tools/salesInvoicesCreate.js";
import { tool$salesInvoicesDelete } from "./tools/salesInvoicesDelete.js";
import { tool$salesInvoicesGet } from "./tools/salesInvoicesGet.js";
import { tool$salesInvoicesList } from "./tools/salesInvoicesList.js";
import { tool$salesInvoicesUpdate } from "./tools/salesInvoicesUpdate.js";
import { tool$settlementsGet } from "./tools/settlementsGet.js";
import { tool$settlementsGetNext } from "./tools/settlementsGetNext.js";
import { tool$settlementsGetOpen } from "./tools/settlementsGetOpen.js";
import { tool$settlementsList } from "./tools/settlementsList.js";
import { tool$settlementsListCaptures } from "./tools/settlementsListCaptures.js";
import { tool$settlementsListChargebacks } from "./tools/settlementsListChargebacks.js";
import { tool$settlementsListPayments } from "./tools/settlementsListPayments.js";
import { tool$settlementsListRefunds } from "./tools/settlementsListRefunds.js";
import { tool$subscriptionsAll } from "./tools/subscriptionsAll.js";
import { tool$subscriptionsCancel } from "./tools/subscriptionsCancel.js";
import { tool$subscriptionsCreate } from "./tools/subscriptionsCreate.js";
import { tool$subscriptionsGet } from "./tools/subscriptionsGet.js";
import { tool$subscriptionsList } from "./tools/subscriptionsList.js";
import { tool$subscriptionsListPayments } from "./tools/subscriptionsListPayments.js";
import { tool$subscriptionsUpdate } from "./tools/subscriptionsUpdate.js";
import { tool$terminalsGet } from "./tools/terminalsGet.js";
import { tool$terminalsList } from "./tools/terminalsList.js";
import { tool$walletsRequestApplePaySession } from "./tools/walletsRequestApplePaySession.js";
import { tool$webhookEventsGet } from "./tools/webhookEventsGet.js";
import { tool$webhooksCreate } from "./tools/webhooksCreate.js";
import { tool$webhooksDelete } from "./tools/webhooksDelete.js";
import { tool$webhooksGet } from "./tools/webhooksGet.js";
import { tool$webhooksList } from "./tools/webhooksList.js";
import { tool$webhooksTest } from "./tools/webhooksTest.js";
import { tool$webhooksUpdate } from "./tools/webhooksUpdate.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  security?: SDKOptions["security"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Client",
    version: "0.0.4",
  });

  const client = new ClientCore({
    security: deps.security,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$paymentsCreate);
  tool(tool$paymentsList);
  tool(tool$paymentsGet);
  tool(tool$paymentsUpdate);
  tool(tool$paymentsCancel);
  tool(tool$paymentsReleaseAuthorization);
  tool(tool$methodsList);
  tool(tool$methodsAll);
  tool(tool$methodsGet);
  tool(tool$refundsCreate);
  tool(tool$refundsList);
  tool(tool$refundsGet);
  tool(tool$refundsCancel);
  tool(tool$refundsAll);
  tool(tool$chargebacksList);
  tool(tool$chargebacksGet);
  tool(tool$chargebacksAll);
  tool(tool$capturesCreate);
  tool(tool$capturesList);
  tool(tool$capturesGet);
  tool(tool$walletsRequestApplePaySession);
  tool(tool$paymentLinksCreate);
  tool(tool$paymentLinksList);
  tool(tool$paymentLinksGet);
  tool(tool$paymentLinksUpdate);
  tool(tool$paymentLinksDelete);
  tool(tool$paymentLinksListPayments);
  tool(tool$terminalsList);
  tool(tool$terminalsGet);
  tool(tool$delayedRoutingCreate);
  tool(tool$delayedRoutingList);
  tool(tool$customersCreate);
  tool(tool$customersList);
  tool(tool$customersGet);
  tool(tool$customersUpdate);
  tool(tool$customersDelete);
  tool(tool$customersCreatePayment);
  tool(tool$customersListPayments);
  tool(tool$mandatesCreate);
  tool(tool$mandatesList);
  tool(tool$mandatesGet);
  tool(tool$mandatesRevoke);
  tool(tool$subscriptionsCreate);
  tool(tool$subscriptionsList);
  tool(tool$subscriptionsGet);
  tool(tool$subscriptionsUpdate);
  tool(tool$subscriptionsCancel);
  tool(tool$subscriptionsAll);
  tool(tool$subscriptionsListPayments);
  tool(tool$permissionsList);
  tool(tool$permissionsGet);
  tool(tool$organizationsGet);
  tool(tool$organizationsGetCurrent);
  tool(tool$organizationsGetPartner);
  tool(tool$profilesCreate);
  tool(tool$profilesList);
  tool(tool$profilesGet);
  tool(tool$profilesUpdate);
  tool(tool$profilesDelete);
  tool(tool$profilesGetCurrent);
  tool(tool$onboardingGet);
  tool(tool$onboardingSubmit);
  tool(tool$capabilitiesList);
  tool(tool$clientsList);
  tool(tool$clientsGet);
  tool(tool$clientLinksCreate);
  tool(tool$webhooksCreate);
  tool(tool$webhooksList);
  tool(tool$webhooksUpdate);
  tool(tool$webhooksGet);
  tool(tool$webhooksDelete);
  tool(tool$webhooksTest);
  tool(tool$webhookEventsGet);
  tool(tool$balancesList);
  tool(tool$balancesGet);
  tool(tool$balancesGetPrimary);
  tool(tool$balancesGetReport);
  tool(tool$balancesListTransactions);
  tool(tool$settlementsList);
  tool(tool$settlementsGet);
  tool(tool$settlementsGetOpen);
  tool(tool$settlementsGetNext);
  tool(tool$settlementsListPayments);
  tool(tool$settlementsListCaptures);
  tool(tool$settlementsListRefunds);
  tool(tool$settlementsListChargebacks);
  tool(tool$invoicesList);
  tool(tool$invoicesGet);
  tool(tool$salesInvoicesCreate);
  tool(tool$salesInvoicesList);
  tool(tool$salesInvoicesGet);
  tool(tool$salesInvoicesUpdate);
  tool(tool$salesInvoicesDelete);

  return server;
}
