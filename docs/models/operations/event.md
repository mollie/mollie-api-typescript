# Event

## Example Usage

```typescript
import { Event } from "mollie-api-typescript/models/operations";

let value: Event = {
  type: 200,
  createdAt: "2024-03-20T09:13:37.0Z",
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
| `resource`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `type`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 200                                                                                                   |
| `createdAt`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. | 2024-03-20T09:13:37.0Z                                                                                |
| `message`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Customer created                                                                                      |
| `links`                                                                                               | [operations.EventLinks](../../models/operations/eventlinks.md)                                        | :heavy_minus_sign:                                                                                    | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.     |                                                                                                       |