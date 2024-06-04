# Console

IntentJS comes with powerful set of tools to easily create your console commands. You might have come across situations where you would have created temporary scripts or APIs to perform some task. Well, not anymore. IntentJS comes with powerful tools to easily create console commands in your application.

It also comes packed with utilities like `styled` console prints, interactive inputs and fully supports the application lifecycle.

## Creating Command

IntentModule automatically discovers all your console commands which have \`Command\` decorator attached to them.

> To be able for the package to discover the command, you need to register the Injectable class inside `providers` property in your module.

There are basically two ways through which you can define commands.

- Using the `Command` decorator on an Injectable class
- Using the `Command` decorator on an Injectable class' method.

> Remember to use the `@Injectable` decorator on the class always, else the command will not be discovered and registered.

#### Class

You can create an injectable class and use `@Command` decorator on it. The package will automatically look for `handle` method inside the class.

```typescript
import { Injectable } from "@nestjs/common";
import { Command, ConsoleIO } from "@intentjs/core";

@Injectable()
@Command("hello {name=world}", { desc: "Test Command" })
export class AppService {
  async handle(_cli: ConsoleIO): Promise<void> {
    const name = _cli.argument<string>("name");
    _cli.info(`Hello ${name}!`);
    return;
  }
}
```

#### Method

You can use `@Command` decorator on the method.

<pre class="language-typescript"><code class="lang-typescript"><strong>import { Injectable } from "@nestjs/common";
</strong>import { Command, ConsoleIO } from "@intentjs/core";

@Injectable()
export class AppService {
  @Command("hello {name=world}", { desc: "Test Command" })
  sayHello(_cli: ConsoleIO) {
    const name = _cli.argument&#x3C;string>("name");
    _cli.info(`Hello ${name}!`);
    return;
  }
}
</code></pre>

Before running the command, you need to build it first.

```bash
npm run build
```

Now, to run any command, you can simply do

```bash
node intent hello
```

{% hint style="info" %}
If you are using mono-repo setup of IntentJS module, you need to prefix your command with the name of the application (i.e. name of the directory inside the apps folder).
{% endhint %}

You can run your command in your mono-repo setup like

```bash
node intent app_name:list
```

## Defining Input

We understand that you may want to build commands which can be dynamic in nature, ie. you may expect some required or optional parameters from client while running the command. We have made it dead simple for you to define your input expectations.

All user supplied arguments and options are wrapped in curly braces.

### Arguments

Arguments in console applications are required variables.

{% hint style="info" %}
Arguments are required by nature, and not passing them would result in an error. If you are looking for optional arguments, you can have a look at [#options](console.md#options "mention").
{% endhint %}

```typescript
@Command(
  'generate:report {type}',
  { desc: 'Test Command' }
)
```

You can now pass your argument to the command as

```bash
node intent generate:report ordersummay
```

Now that you have passed the argument, you also need to retrieve it inside your command. You can do so by doing

```typescript
async handle(_cli: ConsoleIO): Promise<void> {
    const type = _cli.argument<string>("type");
}
```

{% hint style="info" %}
To read more about retrieving inputs, have a look [here](console.md#retrieving-inputs).
{% endhint %}

You can also define some default values for your arguments.

```typescript
@Command(
  'generate:report {type=salesreport}',
  { desc: 'Test Command' }
)
```

Now, if you don't pass any argument while invoking the `generate:report` command, you would get `"salesreport"` as default value for the `type` argument.

### Options

Options are the optional inputs for each command. They are denoted by double hyphens (`--`).

Example:

```typescript
@Command(
  'generate:report {type} {--emails}',
  {  desc: 'Test Command',}
)
```

```bash
$ node intent generate:report ordersummay --emails=email@example.com
```

To pass array of values in any options or arguments, you can add asterik.

```typescript
generate:report {type*} {--emails*}
```

```bash
$ node intent generate:report ordersummay ordersummay --emails=email@example.com --emails=email2@example.com
```

You can also define default values for the arguments or options by adding a `=` equal sign followed by the value.

```typescript
generate:report {type=gar} {--emails=email@example.com}
```

---

## Retrieving Inputs

We provide easy to use APIs to work with I/O directly from the console.

While executing command, you will need to fetch the values that you may have passed during invoking the command. Your method will be passed an `_cli: ConsoleIO` object. You can use the \`ConsoleIO\` object to fetch your arguments or options.

For fetching an argument, you can do

```typescript
const type = _cli.argument<string>("type");
```

For fetching an option, you can do

```typescript
const email = _cli.option<string>("email");
```

If no value is passed, the `argument` and `option` function will return the default value or `null` value.

### Prompts

You may want to ask for input while executing a command. We provide several ways with which you can ask for inputs directly on console.

To ask for simple input from the user, you can call `ask()` method.

```typescript
const name = _cli.ask("name");
```

You may want to ask user about some secret or any password, which ideally should not get printed on the console.

```typescript
const password = await _cli.password("Enter your pasword to continue");
```

While running a command, you can also give choices to select from a defined list. For example:

```typescript
/**
 * Single choice example.
 * Returns one of the passed choices.
 */
const choice = await _cli.select(
  "Please select one superhero", // question
  ["Batman", "Ironman"], // choices
  false // multiple?
);

/**
 * Multiple choices example.
 * Returns an array of the selected options.
 */
const choice = await _cli.select(
  "Please select one superhero",
  ["Batman", "Ironman"],
  true
);
```

Lastly, sometimes you may want to ask for confirmation from the user before doing any execution. You can do so by using `confirm` method.

```typescript
const confirm = await _cli.confirm("Do you really wish to continue?");
if (confirm) {
  // do your magic here
}
```

## Writing Outputs

Till now, we have seen how we can operate with differnt type of inputs on the cli. There will be scenarios when you will want to print something on the console. We provide a very easy-to-use set of APIs for your basic console outputing needs.

To print any message on the console, use `info` method

```typescript
_cli.info("Some amazing message"); // Outputs 'Some amazing message' on the console
```

Incase of an error message, use `error` method.

```typescript
_cli.error("Oops! Something went wrong.");
```

Similarly, to print any success message, use `success` method

```typescript
_cli.success("Wohoo! The command worked just fine!");
```

To print a divider on the console, simple do

```typescript
_cli.line();
```

To print a table on the console, you can use `table` method:

```typescript
// this will automatically print unicode table on the console
_cli.table(
  ["Name", "Designation"],
  [
    { name: "User 1", designation: "Software Engineer L1" },
    { name: "User 2", designation: "Software Engineer L1" },
  ]
);
```

---

## Available Commands

We provide few commands, which will help in your day to day development process.

To list all commands available in your application, you can do

```bash
node intent list
```

`list` is a reserved command name, please don't use it in any of the commands

---

## Available Options

We provide few out-of-the-box predefined options, which you can use with each of your command.

To list all the arguments and options that your command supports/expects, simply run

```bash
node intent users:greet --options
```

`--options` is a reserved option. Please don't use it anywhere in your command
