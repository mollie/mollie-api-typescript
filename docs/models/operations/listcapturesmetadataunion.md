# ListCapturesMetadataUnion

Provide any data you like, for example a string or a JSON object. We will save the data alongside the entity. Whenever
you fetch the entity with our API, we will also include the metadata. You can use up to approximately 1kB.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.ListCapturesMetadata`

```typescript
const value: operations.ListCapturesMetadata = {};
```

### `string[]`

```typescript
const value: string[] = [
  "<value 1>",
  "<value 2>",
];
```

