'use strict';

const assert = require('assert');

const sandbox = require('sinon').createSandbox();

const { Model } = require('@janiscommerce/model-controller');

const ActiveClient = require('../');

/* eslint-disable prefer-arrow-callback */

describe('ActiveClient', () => {

	const theClient = {
		id: 1,
		foo: 'bar'
	};

	afterEach(() => {
		sandbox.restore();
	});

	it('should return false when no passing the field or value', async function() {
		const client = await ActiveClient.getByField();
		assert(!client);
	});

	it('should return false when no passing the value', async function() {
		const client = await ActiveClient.getByField('foo');
		assert(!client);
	});

	it('should return false when model client not found the client', async function() {

		sandbox.stub(Model.prototype, 'get')
			.returns([]);

		const client = await ActiveClient.getByField('foo', 'bar');

		assert(!client);
	});

	it('should return the client when model client found the client', async function() {

		sandbox.stub(Model.prototype, 'get')
			.returns([theClient]);

		const client = await ActiveClient.getByField('foo', 'bar');

		assert.deepEqual(client, { ...theClient });
	});

});
