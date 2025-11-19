# EntityEvent

## Example Usage

```typescript
import { EntityEvent } from "mollie-api-typescript/models";

let value: EntityEvent = {
  resource: "event",
  type: 200,
  createdAt: "2024-03-20T09:13:37+00:00",
  message: "Customer created",
  links: {
    url: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `resource`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | event                                                                                                 |
| `type`                                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 200                                                                                                   |
| `createdAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. | 2024-03-20T09:13:37+00:00                                                                             |
| `message`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | Customer created                                                                                      |
| `links`                                                                                               | [models.EntityEventLinks](../models/entityeventlinks.md)                                              | :heavy_minus_sign:                                                                                    | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.     |                                                                                                       |