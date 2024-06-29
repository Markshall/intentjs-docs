---
title: Logging
description:
image:
---

# Logging

## Introduction

Logging is very crucial for any application. It is used to record any event when something occurs within (or affects) the application. Application logging is a critical part of log management and can help keep your business running smoothly and securely.

Application logging is the process of saving application events. With this information in hand, tech pros can assess threats and analyze errors before they disrupt broader business workflows. This functionality is provided via the Logger class in the @nestjs/common package. You can fully control the behavior of the logging system.

IntentJs comes with simple methods to store all your application logs in the format and storage of your choice which is currently built on top of `winston`.

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

### Log Levels

Log `level` can have following values:

`error`: Whenever you encounter any Exception preventing one or more functionalities from properly functioning and want to log the information about that event.

`warn`: The log level that indicates that something unexpected happened in the application, a problem, or a situation that might disturb one of the processes. But that doesn’t mean that the application failed.

`info`: The standard log level for logs indicating something happened,the application entered a certain state, some API called, etc.

`http`: This level is used to log HTTP request-related messages. HTTP transactions ranging from the host, path, response, requests, etc.

`verbose`: The Verbose level logs a message for both the activity start and end, plus the values of the variables and arguments that are used.

`debug`: The DEBUG log level should be used for information that may be needed for diagnosing issues and troubleshooting or when running application in the test environment for the purpose of making sure everything is running correctly.

`silly`: The current stack trace of the calling function should be printed out when silly messages are called. This information can be used to help developers and internal teams debug problems.

Whichever value you select, the logs having level lower than that will be silenced.

**Supported Transports**

- `Default`:
  This is the default transport and logs are saved in cli.
- `Console`:
  This transport is used to store all your logs in a cli.
- `File`:
  This transport is used to store all your logs in a file.
- `HTTP`:
  This transport is used to pass an Http url to send all your logs to some host.
- `Stream`:
  This transport is used to create a stream of logs and pass/save it according to your accord.

**Supported Formats**

`Default`
`Simple`
`Align`
`Cli`
`Colorize`
`Combine`
`Errors`
`Json`
`Label`
`Logstash`
`Metadata`
`Ms`
`PadLevels`
`PrettyPrint`
`Printf`
`Splat`
`Timestamp`
`Uncolorize`

Let's say you want to save your logs in a file with basic format.

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
