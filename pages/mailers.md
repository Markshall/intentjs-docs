---
title: Mailers
description:
image:
---

# Mailers

## Configuration

Before you register the `MailmanModule`, you need to add the following change in your root `tsconfig.json` to enable your project to make JSX components valid.

```json
...
    "compilerOptions": {
        ...,
        "jsx": "react-jsx",
        "skipLibCheck": true,
    }
...
```

Now you can follow the below steps to register `MailmanModule` with your app, import the module inside `AppModule`.

### Static Registration

> `MailmanModule` is added to global scope by default.

```typescript
import { Module } from "@nestjs/common";
import { MailmanModule } from "@squareboat/nest-mailman";

@Module({
  imports: [
    MailmanModule.register({
      host: process.env.MAIL_HOST,
      port: +process.env.MAIL_PORT,
      username: process.env.MAIL_USERNAME,
      password: process.env.MAIL_PASSWORD,
      from: process.env.MAIL_SENDER_ID,
      templateConfig: {
        baseComponent: GenericMail,
        templateOptions: {
          socialMedia: [
            {
              name: "youtube-noshare",
              href: "https://www.youtube.com/channel/UCyUzPvikgKBYTfp4XBIbbOg",
            },
            {
              name: "instagram-noshare",
              href: "https://www.instagram.com/square.boat/",
            },
            {
              name: "linkedin-noshare",
              href: "https://www.linkedin.com/company/squareboat",
            },
            {
              name: "github-noshare",
              href: "https://github.com/squareboat",
            },
          ],
          appLogoSrc:
            "https://i.ibb.co/7VrFQwN/squareboat-logo-transparent.png",
          appName: "Squareboat",
          contactEmail: "hi@squareboat.com",
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

### Recommended Way

Use `ConfigModule` provided by NestJS to load configurations. To learn about `ConfigModule`, [click here](https://docs.nestjs.com/techniques/configuration).

**1. Create filesystem.ts file**

```typescript
import { registerAs } from "@nestjs/config";
import { MailmanOptions } from "@squareboat/nest-mailman";
import { GenericMail } from "resources/views/mail";

export default registerAs(
  "mailman",
  () =>
    ({
      host: process.env.MAIL_HOST,
      port: +process.env.MAIL_PORT,
      username: process.env.MAIL_USERNAME,
      password: process.env.MAIL_PASSWORD,
      from: process.env.MAIL_SENDER_ID,
      templateConfig: {
        baseComponent: GenericMail,
        templateOptions: {
          socialMedia: [
            {
              name: "youtube-noshare",
              href: "https://www.youtube.com/channel/UCyUzPvikgKBYTfp4XBIbbOg",
            },
            {
              name: "instagram-noshare",
              href: "https://www.instagram.com/square.boat/",
            },
            {
              name: "linkedin-noshare",
              href: "https://www.linkedin.com/company/squareboat",
            },
            {
              name: "github-noshare",
              href: "https://github.com/squareboat",
            },
          ],
          appLogoSrc:
            "https://i.ibb.co/7VrFQwN/squareboat-logo-transparent.png",
          appName: "Squareboat",
          contactEmail: "hi@squareboat.com",
        },
      },
    } as MailmanOptions)
);
```

**2. Register ConfigModule**

```typescript
import { Module } from "@nestjs/common";
import filesystem from "@config/fileystem";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [filesystem],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

**#3. Register Async StorageModule**
Add following snippet to the `imports` array. `ConfigService` is importable from `@nestjs/config` module.

```typescript
MailmanModule.registerAsync({
  imports: [ConfigService],
  useFactory: (config: ConfigService) => {
    return config.get("mailman");
  },
  inject: [ConfigService],
});
```

### Configuration

We provide some configuration which you can use this set default values for the generic template and the smtp server.

| Attribute      | Description                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| host           | SMTP Server Host                                                                        |
| port           | SMTP Server Port                                                                        |
| username       | Username for SMTP Server                                                                |
| password       | Password for SMTP Server                                                                |
| from           | Default `from` address                                                                  |
| mjml           | MJML Configuration Object, [refer here.](https://documentation.mjml.io/#inside-node-js) |
| templateConfig | Refer here                                                                              |

#### Template Configuration Object

| Attribute                    | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| baseComponent                | Base React Component for the generic mail                     |
| templateOptions.socialMedia  | Object to define social media links in the footer of the mail |
| templateOptions.appLogoSrc   | App Logo src                                                  |
| templateOptions.appName      | App Name                                                      |
| templateOptions.contactEmail | Contact Email address for footer                              |

Now that the configuration is done, let's get started with building some elegant mails!

## Build Mail

`MailMessage` class provides multiple APIs which you can use to build your mails.

:::info
This package currently is built on [mjml-react](https://github.com/Faire/mjml-react).
:::

### Built-In Template

Building mails doesn't have to be difficult and time-consuming, that's why Mailman ships with a set of mail builder APIs that makes it easier to build mails without having to define views for every mail that the system rolls out.

We ship an in-built template that you can use for all your transactional and internal communication emails.
A sample usage of a mail built with builder APIs,

```typescript
import { MailMessage } from "@squareboat/nest-mailman";

export class TestmailService {
  toMail() {
    const mail = MailMessage.init()
      .greeting("Hello Piyush 👋")
      .line("Thank you for choosing this package to deliver your mails. ")
      .line("We cannot wait you see build with this package. 🫶")
      .table([
        { website: "Squareboat", href: "https://squareboat.com" },
        { website: "Github", href: "https://github.com/squareboat" },
      ])
      .action("View Docs", "https://squareboat.com/")
      .subject("Hey there from Squareboat");
  }
}
```

The above snippet will generate the following view:

![In-built template sample](/docs/mailman-sample.png)

Cool, right! 😎

Here is a list of the available handy methods (We are working on improving these so that they are more flexible and customizable.)

| Method             | Description                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| greeting(text)     | Sets the greeting for a mail. Rendered with a `<h1>` tag                                                                                                                         |
| line(text)         | Adds text wrapped with a line break                                                                                                                                              |
| action(text, link) | Renders a link as a button anchoring the passed text. We value accessibility and so every action also adds the link as a fallback just in case the link is not properly rendered |
| table (rows[])     | Renders a table                                                                                                                                                                  |
| divider            | Prints a divider                                                                                                                                                                 |
| subject            | Sets the mail's subject line                                                                                                                                                     |
| meta.title         | Title of the mail if and when rendered in browser                                                                                                                                |
| meta.preview       | Summay to be shown in user's inbox                                                                                                                                               |

### Templating

We have added the support for JSX elements, ie React Components (built on top of mjml components), to make the development of mail feel like breeze.

#### MJML

MJML <i>is</i> the framework for building responsive e-mails. And we couldn't have gotten far in Mailman without this. If you are new to MJML, do check out their documentation at [mjml.io](https://mjml.io/)

We start off by creating a `.mjml` file and specifying the filename to the same old `view()` method of MailMessage

```typescript {4}
const user = { name: 'Anubhav Jain' };
const mail = MailMessage.init()
    .subject('Introduing our newsletter');
    .view(CustomMjmlComponent, {name:'Vinayak'})
```

### Raw Template Strings

Sometimes our mails are small enough and do not need to be defined in a separate template file. For such cases, you can simply use the `raw()` method, with the template string and payload.

```typescript {4}
const user = { name: 'Nihal Arya' };
const mail = MailMessage.init()
    .subject(`${user.name}, welcome to our platform!`);
    .raw(`Hello ${user.name}, <br />Welcome to our platform!<br />Thank you!`)
```

### Attachments

To attach file(s) with your email, you can make use of `attach()` method.

| Parameter | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| filename  | filename to be reported as the name of the attached file.        |
| content   | [Attachment](https://nodemailer.com/message/attachments/) Object |

```typescript
mail.attach("license", {
  path: "https://raw.githubusercontent.com/squareboat/nest-mailman/main/LICENSE.md",
});
```

### Subject

To set the subject for the mail, you can call the `subject('MAIL SUBJECT')` method on mailMessage.

```typescript
mail.subject("Invoice #12345 has been paid. Yay!");
```

### Debugging Mails

Sometimes, you may want to see the final template that will be built out of the mail object. <br/> This can be extremely helpful to check if your mail is using the dynamic content as intended. Another quick usage is to check the HTML rendered by calling the various Mail builder methods. <br/><br/>You can do so by calling the render method, which returns the complete HTML string that will be sent in the mail.

```typescript {7}
const mail = MailMessage.init().greeting("Hello there");

console.log(mail.getMailData().html); // prints the html of the mail generated by mjml
```

### Custom MailMessage

While MailMessage on its own is sufficient in most cases, there can be situations where you may want to add some piece of logic that is specific to a mail. To solve this, you can subclass MailMessage and add in methods on top of MailMessage.

For this to work, you need to implement the `handle()` method, which will return the mail body.

```typescript
import { MailMessage } from "@squareboat/nest-mailman";

export class InvoicePaid extends MailMessage {
  constructor(private order: Record<string, any>) {
    super();
  }

  handle(): this {
    // write any business logic that you may want to add here
    return this.greeting("Hello admin")
      .line(`One of your invoices ${this.order.id} has been paid!`)
      .action("Check invoice", "https://squareboat.com")
      .line("Please let us know if you are facing any issue!")
      .subject(`INVOICE PAID: ${this.order.id}`);
  }
}
```

## Send Mail

Since `MailMessage` and the transporters are two different entities, Mailman separates these concerns by providing 2 sets of APIs(Build Mail and Send Mail). In the previous section, you looked at the various APIs to build Mail. This section introduces APIs that help send the mail.

### Send()

To send a mail, we first call the `init()` method on `Mailman`. This creates a new Mailman instance for us, on which we can call the `to(recipient)` to specify the mail recipient(s) and the `send(mailMessage)` method to actually send the mail.

```typescript {10,11,12}
import { Mailman, MailMessage } from "@squareboat/nest-mailman";

const mail = MailMessage.init()
  .greeting("Hello admin")
  .line("One of your invoices #12345 has been paid!")
  .action("Check invoice", "https://squareboat.com")
  .line("Please let us know if you are facing any issue!")
  .subject("INVOICE PAID: #12345");

Mailman.init()
  .to("opensource@squareboat.com") // OR .to(['id1@email.com', 'id2@email.com'])
  .send(mail);
```

:::info
`MailMessage` is used for building mails whereas `Mailman` is used for transporting emails.
:::

### Override Sender

To override the from address specified when configuring Mailman, simpy call the `from(sender)` method

```typescript {3}
Mailman.init()
  .to("opensource@squareboat.com") // OR .to(['id1@email.com', 'id2@email.com'])
  .from("no-reply@email.com")
  .send(mail);
```

### Marking Carbon Copies

To add cc or bcc to your mail, you can make use of the `cc()` and `bcc()` methods passing in an email or array of emails.

```typescript {3,4}
Mailman.init()
  .to("opensource@squareboat.com") // OR .to(['id1@email.com', 'id2@email.com'])
  .cc("cc@email.com") // string or string[]
  .bcc("bcc@email.com") // string or string[]
  .send(mail);
```
