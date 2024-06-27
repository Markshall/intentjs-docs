---
title: Logging
description:
image:
---

# Logging

## Introduction

Logging is very crucial for any application. It is used to record any event when something occurs within (or affects) the application. Application logging is a critical part of log management and can help keep your business running smoothly and securely.

Application logging is the process of saving application events. With this information in hand, tech pros can assess threats and analyze errors before they disrupt broader business workflows. This functionality is provided via the Logger class in the @nestjs/common package. You can fully control the behavior of the logging system.

**Supported Transports**

- Console
- File
- HTTP
- Stream

## Configuration

By default, all of the configurations for Loggers are stored inside `config/logger.ts` . You would see a similar configuration as below

```typescript
import { registerAs } from "@nestjs/config";
import {
  Formats,
  IntentLoggerOptions,
  Transports,
} from "@libs/quicksilver/logger/options";

export default registerAs(
  "logger",
  () =>
    ({
      isGlobal: true,
      default: "app",
      disableConsole: false,
      loggers: {
        app: {
          level: "debug",
          transports: [
            {
              transport: Transports.Console,
              format: Formats.Json,
            },
          ],
        },
      },
    } as IntentLoggerOptions)
);
```

Let's say you want to save your logs in a file.

```typescript
import {
  Formats,
  IntentLoggerOptions,
  Transports,
} from "@libs/quicksilver/logger/options";
import { registerAs } from "@nestjs/config";

export default registerAs(
  "logger",
  () =>
    ({
      isGlobal: true,
      default: "app",
      disableConsole: false,
      loggers: {
        app: {
          level: "debug",
          transports: [
            {
              transport: Transports.File,
              format: Formats.Simple,
              filename: "application.log",
            },
          ],
        },
      },
    } as IntentLoggerOptions)
);
```

Log `level` can have following values:
`error`
`warn`
`info`
`http`
`verbose`
`debug`
`silly`
Whichever value you select, the logs having level lower than that will be silenced.

## Usage

Now that logger is configured, you can use the `Logger` method.

```typescript
// method
import { Logger } from "@intent/core";
const logger = Logger("app");
```

If no logger name is passed, then default logger is returned.

```typescript
// Using debug level log
await Logger().debug("Why isn't there any bug");

// Using info level log
await Logger().info("Intent Logger is Best.");

// Using error level Log
await Logger().error("My code broke down.");
```
