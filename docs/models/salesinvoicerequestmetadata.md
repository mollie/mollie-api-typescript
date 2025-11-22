# SalesInvoiceRequestMetadata

Provide any data you like as a JSON object. We will save the data alongside the entity. Whenever
you fetch the entity with our API, we will also include the metadata. You can use up to approximately 1kB.

## Example Usage

```typescript
import { SalesInvoiceRequestMetadata } from "mollie-api-typescript/models";

let value: SalesInvoiceRequestMetadata = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |