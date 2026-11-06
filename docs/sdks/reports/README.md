# Reports

## Overview

### Available Operations

* [create](#create) - Create report
* [get](#get) - Get report

## create

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Create a report. Mollie generates it in the background, so you get a `pending` status back right away.

Poll [Get report](get-report) to check on progress, and grab a download link once it's ready.

This needs an organization access token. A token scoped to a single website profile can't be used,
since report data spans the whole organization.

Test mode credentials are rejected, since report data has no live/test distinction.

Creating a report with the exact same parameters while one is already pending or completed doesn't create
a new one. You get the existing report back instead, whatever status it currently has.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-report" method="post" path="/v2/reports" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  await client.reports.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    createReportRequest: {
      reportType: "transaction_margin",
      fromDate: new RFCDate("2026-08-01"),
      untilDate: new RFCDate("2026-08-31"),
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { reportsCreate } from "mollie-api-typescript/funcs/reportsCreate.js";
import { RFCDate } from "mollie-api-typescript/types";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await reportsCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    createReportRequest: {
      reportType: "transaction_margin",
      fromDate: new RFCDate("2026-08-01"),
      untilDate: new RFCDate("2026-08-31"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("reportsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateReportRequest](../../models/operations/createreportrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 403, 422, 429        | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a single report by its ID. Poll this to check on a report you created, and to grab a download
link once it's ready.

The download link is pre-signed and freshly generated on every call, and expires 15 minutes after you get
it. If it expires before you download the file, just call this endpoint again for a new one. Expiry of
the link doesn't affect the report itself.

A report that belongs to another organization gets a `404`, same as one that doesn't exist. The same goes
for a credential scoped to a single website profile, or a test mode credential. Reports are
organization-wide with no live/test distinction, so neither can ever own a real report. That keeps the
rule simple: any credential that can't own this report gets a `404`, and we never leak whether it exists.

### Example Usage: get-report-200-completed

<!-- UsageSnippet language="typescript" operationID="get-report" method="get" path="/v2/reports/{reportId}" example="get-report-200-completed" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.reports.get({
    reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { reportsGet } from "mollie-api-typescript/funcs/reportsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await reportsGet(client, {
    reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsGet failed:", res.error);
  }
}

run();
```
### Example Usage: get-report-200-failed

<!-- UsageSnippet language="typescript" operationID="get-report" method="get" path="/v2/reports/{reportId}" example="get-report-200-failed" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.reports.get({
    reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { reportsGet } from "mollie-api-typescript/funcs/reportsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await reportsGet(client, {
    reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsGet failed:", res.error);
  }
}

run();
```
### Example Usage: get-report-200-pending

<!-- UsageSnippet language="typescript" operationID="get-report" method="get" path="/v2/reports/{reportId}" example="get-report-200-pending" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.reports.get({
    reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { reportsGet } from "mollie-api-typescript/funcs/reportsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await reportsGet(client, {
    reportId: "rpt_XRAG3v9EUyCDcX99pJ2Vc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReportRequest](../../models/operations/getreportrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityReport](../../models/entityreport.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 429                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |