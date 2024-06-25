# Requests

IntentJS provides a useful `Request` class over express' Request object. It automatically parses the incoming data, headers.

## Interacting With The Request

### Using the Request

To get the object the IntentRequest, you will need to type-hint the `IntentRequest` class from `@intentjs/core` . The incoming request will automatically be injected

```ts
import { IRequest, IntentRequest, Controller } from "@intentjs/core";

@Controller()
export class BookController {
  async create(@IRequest() req: IntentRequest) {
    const name = req.input("name");
    return { msg: "Book Created Successfully!" };
  }
}
```

## Request Inputs, Host, Path and Methods

The `IntentRequest` instance comes packed with variety of methods.

### Retrieving Inputs from Payload

To retrieve input for a particular key from the `IntentRequest` instance, you can use `input` method.

```typescript
const name = req.input("name");
```

You can also pass the second argument as the default value to the `input` method. If the passed key is not present inside the payload, it will return the default value.&#x20;

If you want to get the complete payload from the `req` object, you can use `all` method, this would give you a combination of path parameters, query params, and body combined in one single object.

```typescript
const inputs = req.all();
```

If you want to fetch a value as a string, you can use `string` method

```typescript
const str = req.string("name");
```

Alternatively, if you want to fetch a value parsed as a number, you can use the `number` method

```typescript
const num = req.number("amount");
```

If you would to fetch a value as a boolean, you can use the `boolean` method, this method returns `true` for all "truthy" values. It would return `true` for 1, "1", true, "true", "yes", "on", for all other values it would return `false`;

```typescript
const bool = req.boolean("tncAgreed");
```

### Accessing Query Parameters

If you want to specifically access query parameters, you can make use of `query` method inside the `IntentRequest` object.

To access a query param, you can pass the key to the `query` method like below.

```typescript
const query = req.query("page");
```

If you don't pass any argument to it, it would return all query params.

### Input Presence

There can be situations where you want to just check if a particular key is present inside the payload or not. To do so, you can make use of `has` or `hasAny` method.

Using `has` method, you can check if a particular key is present inside the payload or not.

```typescript
if (req.has("email")) {
  // ...
}
```

Similarly, if you want to check if either of keys are available or not, you can pass multiple keys to the same `has` method. It will return true as soon as any of the passed keys are present inside the payload.

```typescript
if (req.has("email", "phone")) {
  // ...
}
```

### Accessing the Headers

Headers are important if you are building a REST API as they provide lots of meta information which you can use in your application. `IntentRequest` offers useful methods for headers which you can use.

To get a header by it's key, you can use the `header` method

```typescript
const authorization = req.header("authorization");
```

You can also pass the second argument as the default value to the `header` method. If the passed key is not present inside the payload, it will return the default value.&#x20;

If you want to get all of the headers, you can use the `headers` method.

```typescript
const headers = req.headers();
```

As most of the REST APIs, use `JWT` for authentication, `IntentRequest` comes with a `bearerToken` method to help you easily fetch the bearer token without doing the hassle of parsing the header yourself. You can use the method like below

```typescript
const token = req.bearerToken();
```

To check if a request has a specific header, you can make use of `hasHeader` method.

```typescript
if (req.hasHeader("authorization")) {
  // ...
}
```

If you want to check for multiple headers, you can simply pass the headers to the same `hasHeader` method only. It will return true if any one of the header is present inside the request.

```typescript
if (req.hasHeader("authroization", "cookie")) {
  // ...
}
```

### Playing with Content Types

`IntentRequest` comes with variety of methods through which you can use to fetch and check for certain content types in your application.

To check if a particular request expects JSON, you can use `expectsJson` method.

```typescript
if (req.expectsJson()) {
  // ...
}
```

To get all acceptable content types you can use `getAcceptableContentTypes` method.

```typescript
const contentTypes = req.getAcceptableContentTypes();
```

To check if a request accepts certain type of content type, you can make use of `accepts` method.

```typescript
if (req.accepts("application/xml", "application/json")) {
  // ...
}
```

It would return true if any of the content type is acceptable. Otherwise, it will return false.
