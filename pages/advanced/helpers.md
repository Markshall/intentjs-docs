# Helpers

## Introduction

IntentJS comes packed with helper methods which you can use to abstract many trivial tasks from your main piece of code.

IntentJS provides the following helpers

* [Arrays](helpers.md#arrays)
* [Objects](helpers.md#objects)
* [Numbers](helpers.md#numbers)
* [Pipelines](helpers.md#pipelines)

## Available Methods

### Arrays

* [Arr.toObj](helpers.md#arr.toobj)
* Arr.isArray
* Arr.flatten
* Arr.forget
* Arr.pluck
* Arr.random
* Arr.sort
* Arr.sortDesc
* Arr.head
* Arr.last

### Objects

* [Obj.dot](helpers.md#obj.dot)
* Obj.undot
* [Obj.entries](helpers.md#obj.entries)
* Obj.pick
* Obj.omit
* Obj.pluck

### Numbers

* [Num.abbreviate](helpers.md#abbreviate)
* [Num.clamp](helpers.md#clamp)
* [Num.currency](helpers.md#currency)
* [Num.fileSize](helpers.md#file-size)
* [Num.forHumans](helpers.md#for-humans)
* [Num.format](helpers.md#format)
* [Num.ordinal](helpers.md#ordinals)
* [Num.percentage](helpers.md#percentage)
* [Num.spell](helpers.md#spell)

### Strings

* Str.after
* Str.before
* Str.is
* Str.between
* Str.camel
* Str.charAt
* Str.contains
* Str.containsAll
* Str.endsWith
* Str.headline
* Str.is
* Str.isEmail
* Str.isJson
* Str.isUrl
* Stri.isUlid
* Str.kebab
* Str.lcfirst
* Str.length
* Str.limit
* Str.lower
* Str.mask
* Str.padBoth
* Str.padLeft
* Str.padRight
* Str.plural
* Str.position
* Str.random
* Str.remove
* Str.repeat
* Str.replace
* Str.replaceArray
* Str.replaceFirst
* Str.replaceLast
* Str.replaceMatches
* Str.reverse
* Str.singular
* Str.slug
* Str.snake
* Str.squish
* Str.startsWith
* Str.studly
* Str.inject
* Str.swap
* Str.take
* Str.title
* Str.toBase64
* Str.ucfirst
* Str.ulid
* Str.unwrap
* Str.wordCount
* Str.wordWrap
* Str.words
* Str.wrap

## Array Helper Methods

#### \`Arr.toObj\`

The `Arr.toObj` method transforms the array to an object.

<pre class="language-typescript" data-full-width="false"><code class="lang-typescript">const array = [
  ['The Alchemist', 'Paulo Coelho'],
  ['Shoe Dog', 'Phil Knight'],
];

const obj = Arr.toObj(array, ['book', 'author']);
/**
<strong>[
</strong>  { book: 'The Alchemist', author: 'Paulo Coelho' },
  { book: 'Shoe Dog', author: 'Phil Knight' }
]
*/
</code></pre>

## Object Helper Methods

#### Obj.dot

The `Obj.dot` converts a nested object to dot notation object

```typescript
const obj = {
  name: { fullName: 'Vinayak', lastName: 'Sarawagi' },
  address: { country: 'India', code: 'IN' },
};

const dotObj = Obj.dot(obj);
/**
{
  'name.fullName': 'Vinayak',
  'name.lastName': 'Sarawagi',
  'address.country': 'India',
  'address.code': 'IN'
}
*/
```

#### Obj.entries

The `Obj.entries` method converts a deeply nested object into a \[key, value] array. If the object is nested, it would automatically convert the obj to dot notation.

```typescript
const obj = {
      id: 1,
      name: { fullName: 'Vinayak', lastName: 'Sarawagi' },
      address: { country: 'India', code: 'IN' },
};

const objEntries = Obj.entries(obj);
/**
[
  [ 'id', 1 ],
  [ 'name.fullName', 'Vinayak' ],
  [ 'name.lastName', 'Sarawagi' ],
  [ 'address.country', 'India' ],
  [ 'address.code', 'IN' ]
]
*/
```

## Number Helper Methods

All of the number helpers are exported from `import { Num } from '@intentjs/core'`

#### Abbreviate

The abbreviate method returns the human-readable format of the provided numerical value.

```typescript
import { Num } from '@intentjs/core';

Num.abbreviate(1000); 
// 1K

Num.abbreviate(1200, { precision: 2 }); 
// 1.2K

Num.abbreviate(1200, { locale: 'hi' }); 
// 1.2 हज़ार
```

#### Clamp

Clamp helper allows you to ensure that the given number remains within the specified range. f the number is lower than the minimum, the minimum value is returned. If the number is higher than the maximum, the maximum value is returned:

```typescript
Num.clamp(80, 20, 100);
// 80

Num.clamp(10, 20, 100);
// 20

Num.clamp(5, 20, 100);
// 20

Num.clamp(110, 20, 100);
// 100
```

#### Currency

Currency helper returns the currency format of a given number.

```typescript
Num.currency(12300);
// ₹12,300.00

Num.currency(12300, { currency: 'USD' });
// $12,300.00
```

#### File Size

The `fileSize` method returns the file size representation of the number passed.

```typescript
Num.fileSize(1000);
// 1KB

Num.fileSize(1024);
// 1KB

Num.fileSize(1024 * 1024 * 1.5, { precision: 2 });
// 1.57MB
```

#### For Humans

`forHumans` method returns the expanded human-readable format of the given number.

```typescript
Num.forHumans(100);
// 100

Num.forHumans(1200);
// 1.2 thousand

Num.forHumans(1230, { precision: 2 });
// 1.23 thousand

Num.forHumans(1230, { locale: 'en' });
// 1,2 millier
```

#### Format

The `format` method formats the number into the given locale string.

```typescript
Num.format(1000);
// 1,000

Num.format(1000, { locale: 'fr' });
// 1 000

Num.format(1200);
// 1,200
```

#### Ordinals

Ordinal method returns the ordinal format of a number.

```typescript
Num.ordinal(1);
// 1st

Num.ordinal(2);
// 2nd

Num.ordinal(3);
// 3rd

Num.ordinal(20);
// 20th
```

#### Percentage

`Num.percentage` method formats the given value into a percentage string.

```typescript
Num.percentage(10);
// 10.0%

Num.percentage(10, { locale: 'fr' });
// 10,0 %

Num.percentage(10.123, { precision: 2 });
// 10.12%
```

#### Spell

## String Helper Methods

#### After

#### Before

#### Between

#### Camel

#### CharAt

#### Contains

#### ContainsAll

#### EndsWith

#### Headline

#### Is

#### IsEmail

#### IsJson

#### IsUrl

#### IsUlid

#### Kebab

#### Lcfirst

#### Length

#### Limit

#### Lower

#### Mask

#### PadBoth

#### PadLeft

#### PadRight

#### Plural

#### Position

#### Random

#### Remove

#### Repeat

#### Replace

#### ReplaceArray

#### ReplaceFirst

#### ReplaceLast

#### ReplaceMatches

#### Reverse

#### Singular

#### Slug

#### Snake

#### Squish

#### StartsWith

#### Studly

#### Inject

#### Swap

#### Take

#### Title

#### ToBase64

#### Ucfirst

#### Ulid

#### Unwrap

#### WordCount

#### WordWrap

#### Words

#### Wrap

## Pipelines
