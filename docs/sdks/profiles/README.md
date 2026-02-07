# Profiles

## Overview

### Available Operations

* [create](#create) - Create profile
* [list](#list) - List profiles
* [get](#get) - Get profile
* [update](#update) - Update profile
* [delete](#delete) - Delete profile
* [getCurrent](#getcurrent) - Get current profile

## create

Create a profile to process payments on.

Profiles are required for payment processing. Normally they are created via the Mollie dashboard. Alternatively, you
can use this endpoint to automate profile creation.

### Example Usage: create-profile-201-1

<!-- UsageSnippet language="typescript" operationID="create-profile" method="post" path="/profiles" example="create-profile-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    profileRequest: {
      name: "My website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202070",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { profilesCreate } from "mollie-api-typescript/funcs/profilesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    profileRequest: {
      name: "My website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202070",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-profile-201-2

<!-- UsageSnippet language="typescript" operationID="create-profile" method="post" path="/profiles" example="create-profile-201-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    profileRequest: {
      name: "My website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202070",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { profilesCreate } from "mollie-api-typescript/funcs/profilesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    profileRequest: {
      name: "My website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202070",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateProfileRequest](../../models/operations/createprofilerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProfileResponse](../../models/profileresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve a list of all of your profiles.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-profiles" method="get" path="/profiles" example="list-profiles-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.list({
    from: "pfl_QkEhN94Ba",
    limit: 50,
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
import { profilesList } from "mollie-api-typescript/funcs/profilesList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesList(client, {
    from: "pfl_QkEhN94Ba",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProfilesRequest](../../models/operations/listprofilesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProfilesResponse](../../models/operations/listprofilesresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single profile by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-profile" method="get" path="/profiles/{profileId}" example="get-profile-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.get({
    profileId: "pfl_5B8cwPMGnU",
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
import { profilesGet } from "mollie-api-typescript/funcs/profilesGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesGet(client, {
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProfileRequest](../../models/operations/getprofilerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProfileResponse](../../models/profileresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 410                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## update

Update an existing profile.

Profiles are required for payment processing. Normally they are created and updated via the Mollie dashboard.
Alternatively, you can use this endpoint to automate profile management.

### Example Usage: update-profile-200-1

<!-- UsageSnippet language="typescript" operationID="update-profile" method="patch" path="/profiles/{profileId}" example="update-profile-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.update({
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      name: "My new website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202071",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { profilesUpdate } from "mollie-api-typescript/funcs/profilesUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesUpdate(client, {
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      name: "My new website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202071",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: update-profile-200-2

<!-- UsageSnippet language="typescript" operationID="update-profile" method="patch" path="/profiles/{profileId}" example="update-profile-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.update({
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      name: "My new website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202071",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { profilesUpdate } from "mollie-api-typescript/funcs/profilesUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesUpdate(client, {
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      name: "My new website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202071",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateProfileRequest](../../models/operations/updateprofilerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProfileResponse](../../models/profileresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 410, 422             | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## delete

Delete a profile. A deleted profile and its related credentials can no longer be used for accepting payments.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-profile" method="delete" path="/profiles/{profileId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  await client.profiles.delete({
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { profilesDelete } from "mollie-api-typescript/funcs/profilesDelete.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesDelete(client, {
    profileId: "pfl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("profilesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteProfileRequest](../../models/operations/deleteprofilerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 410                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## getCurrent

Retrieve the currently authenticated profile. A convenient alias of the [Get profile](get-profile)
endpoint.

For a complete reference of the profile object, refer to the [Get profile](get-profile) endpoint
documentation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-current-profile" method="get" path="/profiles/me" example="get-current-profile-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.profiles.getCurrent({
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
import { profilesGetCurrent } from "mollie-api-typescript/funcs/profilesGetCurrent.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await profilesGetCurrent(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("profilesGetCurrent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCurrentProfileRequest](../../models/operations/getcurrentprofilerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProfileResponse](../../models/profileresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |