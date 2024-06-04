# Response

IntentJS provides a useful `IntentResponse` class over express' Response object.

## Creating Responses

There are multiple ways you can create a response in your application.

### Strings, Numbers, Objects and Arrays

If you want to simply return the response after processing the request inside the controller, you can just return the data from your controller's method. In the below example, we are returning an `object` but you can return `string`, `number`, or `arrays` from the controller.

```typescript
import { IRequest, IntentRequest, Controller } from '@intentjs/core';

@Controller()
export class BookController {
  async create(@IRequest() req: IntentRe) {
    return { msg: 'Book Created Successfully!' };
  }
}
```

Whatever data you return from here, shall be returned as it is to the client.

### Response Object

While returning primitive data types directly from the controllers are great for most of the use cases. But if you would like to set some header, redirect, or return streams as response. You can make use of the `IResponse` object.

