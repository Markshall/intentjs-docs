---
description: >-
  IntentJS provides a useful file storage abstraction for various file systems
  like Local (Linux, Mac, Windows), AWS S3, Azure Storage Account. It provides
  simple drivers to work with your files.
---

# File Storage

IntentJS provides a useful file storage abstraction for various file systems like `Local (Linux, Mac, Windows)`, `AWS S3`, `Azure Storage Account`. It provides simple drivers to work with your files. You can easily change your drivers without breaking a sweat, as the APIs remain the same.

## Configuration

Before you can start using `Storage` facade, you need to first configure your settings at `config/filesystem.ts`

**#1. Create filesystem.ts file**

```typescript
import { registerAs } from '@intent/config';

export default registerAs('filesystem', () => ({
  default: 'docs',
  disks: {
    docs: {
      driver: 's3',
      bucket: process.env.AWS_S3_DOCS_BUCKET,
      key: process.env.AWS_KEY,
      secret: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    }
  }})
);
```

That's it. You don't need to do anything else, IntentJS would automatically read `filesystem.ts` and configure the disks.

***

### Driver Configuration

IntentJS provides an excellent way to use different storage providers inside your application, without changing any line of code. It's a pure configuration play on the application level. Every driver follow a simple and consistent API.

We currently support the following storage providers.

1. AWS S3
2. Azure Storage Account
3. Local File System

#### **Amazon S3**

S3 is an highly scalable object storage solution provided by AWS. You can learn more about it [here](https://aws.amazon.com/s3/).

**Driver Name:** `s3`

**Configuration:**

```typescript
{
  driver: 's3',
  bucket: process.env.AWS_S3_DOCS_BUCKET,
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET,
  region: process.env.AWS_REGION,
}
```

`s3` driver expects four parameters to interact with an S3 bucket. You can get the `AWS_KEY`, `AWS_SECRET` by creating an api role user using IAM. Learn more about it [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_users\_create.html#id\_users\_create\_api).

#### **Local**

You can use this package to manage the file objects stored locally on your system.

**Driver Name:** `local`

**Configuration:**

```typescript
{
  driver: 'local',
  basePath: '/home/ubuntu/var/www/your_project/storage', // fully qualified path of the folder
  baseUrl: 'https://example.com',
}
```

To serve the file objects from your project, have a look at [serve-static](https://docs.nestjs.com/recipes/serve-static) module by NestJS.

***

## Disks

We understand that while working on a big project, you may sometime encounter case where you will have to handle multiple type of files and filesystems at once.

While drivers help you to differentiate between the different storage provides for each disks. Disks help you create logical distinctions between different types of storages.

**For example:** In e-commerce, you may want to handle the `invoices` and `products` differently. Via the principles of disks we can easily implement it like following:

```typescript
import { registerAs } from '@nestjs/config';
export default registerAs('filesystem', () => ({
  default: 'docs',
  disks: {
    invoices: { // `invoices` disk, will contain the invoices of all the orders passed so far
      driver: 's3',
      bucket: process.env.AWS_S3_DOCS_BUCKET,
      key: process.env.AWS_KEY,
      secret: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    },
    products: { // `products` disk, will contain photos of all the products
      driver: 's3',
      bucket: process.env.AWS_S3_PROFILE_PIC_BUCKET,
      key: process.env.AWS_KEY,
      secret: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    },
  }})
);
```

Here we have created two different logical partitioning of `invoices`, `products` disk without trashing our code 😎.

To switch between the different disks, it is as simple as:

**To access `invoices` disk:**

```typescript
import { Storage } from '@bento/storage'

Storage.disk('invoices') // uses the `invoices` disk mentioned in above steps
```

**To access `products` disk:**

```typescript
import { Storage } from '@bento/storage'

Storage.disk('products') // uses the `products` disk 
```

## Usage

IntentJS comes with very simple APIs to interact with your filesystem. For example, to read a file irrespective of the driver, you can simply do.

```typescript
await Storage.disk('invoices').get('order_1234.pdf') 
// this would give you the buffer content of the pdf file.
```

The above line of code will return the buffer content of the PDF file. Similarly, you can use other methods to perform suitable tasks. You can see the supported methods in the following section.

Let's say you want to put a file on a particular path, you can simply do

```typescript
await Storage.disk('invoices').put(
    'order_23456.pdf', 
    bufferContent,
    {mimeType: 'application/pdf'
});
```

If you want to check if a file exists

<pre class="language-typescript"><code class="lang-typescript"><strong>await Storage.disk('invoices').exists('order_23456.pdf') // returns true or false
</strong></code></pre>

Also, if you want to check if a file is missing or doesn't exists

```typescript
await Storage.disk('invoices').missing('order_23456.pdf') // returns true or false
```

To delete a file in a disk, simply do

```typescript
await Storage.disk('invoices').delete('order_23456.pdf')
```

To get a meta information for a file

```typescript
await Storage.disk('invoices').meta('order_23456.pdf')
```

There can be situations when you would want to copy files from one disk to another, IntentJS makes it simple for you to do so. To copy a file from a disk to another disk, you can simply do

```typescript
await Storage.disk('invoics').copyToDisk('source_file_name.pdf', 'destination_disk_name')
```

Similar to copy, you can also move file from one disk to another disk seamlessly.

```typescript
await Storage.disk('invoices').moveToDisk('source_file_name.pdf', 'destination_disk_name')
```

### **All Methods**

* `put(path: string, fileContent: any): Promise<StorageDriver$PutFileResponse>`: Put the file at the specified path.
* `get(path: string): Promise<Buffer | null>`: Get the file stored at the specified path.
* `exists(path: string): Promise<boolean>`: Check if file exists at the specified path.
* `missing(path: string): Promise<boolean>`: Check if file is missing at the specified path.
* `url(path: string): string`: Get the url for the specified path.
* `signedUrl(path: string, expire: number):Promise<string>`: Get a signed url to privately access the file stored at the specified `path`. Learn more about it [here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html). Currently works for `s3` only.
* `meta(path: string): Promise<StorageDriver$FileMetadataResponse>`: Get file's metadata at the specified path.
* `delete(path: string): Promise<boolean>`: Delete file at the specified path.
* `copy(path: string, newPath: string): Promise<StorageDriver$RenameFileResponse>`: Copy file from path to newPath.
* `move(path: string, newPath: string): Promise<StorageDriver$RenameFileResponse>`: Move the file from path to newPath.
* `getClient()`: Get the underlying client of the disk. Currently works for `s3` only.
* `getConfig()`: Get the configuration object of the disk.

