# Cache

Sometimes, the data retrieval or computed tasks performed by your applications can be heavy, CPU intensive or time taking. In those cases, you may want to save it in a fast-read store so that you don't need to run the computation again and again. When the data is cached, it can be retrieved quickly on subsequent requests for the same data.

This package provides a multi-store cache provider for your IntentJS application.

**Supported Caches**

- Redis
- In-Memory

## Configuration

By default, IntentJS ships a pre-defined configuration for cache, all you will have to do is to configure the environment variables.

If you would like to configure different cache stores, you can do so like below in `config/cache.ts` file:

```typescript
import { registerAs } from "@nestjs/config";
import { CacheOptions } from "@intentjs/core";

export default registerAs(
  "cache",
  () =>
    ({
      default: "redis",
      stores: {
        redis: {
          driver: "redis",
          host: process.env.REDIS_HOST || "127.0.0.1",
          password: process.env.REDIS_PASSWORD || undefined,
          port: process.env.REDIS_PORT || 6379,
          database: process.env.REDIS_DB || 0,
          prefix: "nestjs_boilerplate",
        },
      },
    } as CacheOptions)
);
```

## Usage

To access the store, you can use the `CacheStore` method or `Cache` class.

```typescript
// method
import { CacheStore } from "@intent/core";
const store = CacheStore("redis");

// class
import { Cache } from "@libs/intent/cache";
const store = Cache.store("redis");
```

If no store name is passed, then default store is returned.

Now, you can set data in the store using `.set()` method.

```typescript
// saved forever in the store
await CacheStore().set("reset_password_token", "abcd123456");

// saved for 2 mins or 120 seconds in the store
await CacheStore().set("reset_password_token", "abcdef12345678", 120);
```

To fetch the data from store, you can use `.get()` method.

```typescript
await CacheStore().set("reset_password_token");
// will return 'abcd123456'
```

To check if key exists in the store, you can use `.has()` method

```typescript
await CacheStore().has("reset_password_token");
// will return `true` if found, else `false`
```

To remove a key from the store, use `.forget()` method

```typescript
await CacheStore().forget("reset_password_token");
```

There will be cases where you may want to process something and then save it to store.

Thankfully, this package provides two methods, `.remember()` and `.rememberForever()` method which you can use to handle this case automatically.

```typescript
const cb = () => {
  return "some_random_generated_token";
};

await CacheStore().rememberForever("reset_password_token", cb);

await CacheStore().remember("reset_password_token", cb, 120);
```

Notice the callback `cb` passed to the `rememberForever` method, it will be processed and the value returned by the callback will be serialized and saved to the store automatically.

The only difference between the `rememberForever` and `remember` method is the expiry time (3rd argument) of the key in the store.

## Extras

There might be instances where you would want to generate unique keys with multiple values, and to maintain a uniformity and consistency, this package comes with a `genKey` method.

```typescript
const key = Cache.genKey({ type: "reset_password_token", userId: 1234 });
console.log(key); // type[reset_password_token],userId[1234]
```

`genKey` method automatically sorts the object's key in lexical order.
