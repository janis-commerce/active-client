# active-client

[![Build Status](https://travis-ci.org/janis-commerce/active-client.svg?branch=master)](https://travis-ci.org/janis-commerce/active-client)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/active-client/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/active-client?branch=master)

**ActiveClient** is a simple module for getting an Active Client from a field and a value.
The module only has one method and a Model for the get.

## Installation

```bash
npm install @janiscommerce/active-client
```

## Settings
This package uses the [Settings](https://www.npmjs.com/package/@janiscommerce/settings) package for handle settings.
The setting key is `clients` and the available settings are the following

| Setting | Default Value | Description |
|--|--|--|
| databaseKey | _default | The database key from DB configuration |
| table | clients | The clients table name |


## API

* `getByField(field, value)` **ASYNCHRONOUS**, Search the client by a field and value given.

- `field`: *type* `String`, the field name. eg. 'name'.
- `value`: *type* `String|Integer`, the field value. eg. 'foo'.

Returns a `Object` with the client found or `false` if client not found for `field` with that `value`.

## Usage

```javascript

const ActiveClient = require('@janiscommerce/active-client');

const client = await ActiveClient.getByField('name', 'client-name');

/**
	Expected output:
	{
		id: 1,
		name: 'client-name',
		status: 5
	}
 */

```