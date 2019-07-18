'use strict';

const assert = require('assert');

const sandbox = require('sinon').createSandbox();

const ActiveClient = require('../');
const ModelClient = require('../lib/model-client');

describe('ActiveClient', () => {

	const theClient = {
		id: 1,
		foo: 'bar'
	};

	class RandomClass {

	}

	afterEach(() => {
		sandbox.restore();
	});

	it('should return false when no passing the field or value', async () => {
		const client = await ActiveClient.getByField();
		assert(!client);
	});

	it('should return false when no passing the value', async () => {
		const client = await ActiveClient.getByField('foo');
		assert(!client);
	});

	it('should return false when model client not found the client', async () => {

		sandbox.stub(ModelClient.prototype, 'get')
			.returns([]);

		const client = await ActiveClient.getByField('foo', 'bar');

		assert(!client);
	});

	it('should return the client when model client found the client', async () => {

		sandbox.stub(ModelClient.prototype, 'get')
			.returns([theClient]);

		const client = await ActiveClient.getByField('foo', 'bar');

		assert.deepEqual(client, { ...theClient });
	});

	it('should propagate client when getting an instance from a client', async () => {

		sandbox.stub(ModelClient.prototype, 'get')
			.returns([theClient]);

		const client = await ActiveClient.getByField('foo', 'bar');

		assert.equal(typeof client.getInstance, 'function');

		const instance = client.getInstance(RandomClass);

		assert.deepEqual(client, instance.client);
	});

});
