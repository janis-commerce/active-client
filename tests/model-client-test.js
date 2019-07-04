'use strict';

const assert = require('assert');
const sandbox = require('sinon').createSandbox();

const Settings = require('@janiscommerce/settings');

const ModelClient = require('../lib/model-client');

describe('ModelClient', () => {

	const modelClient = new ModelClient();

	afterEach(() => {
		sandbox.restore();
	});

	const assertSettingsCall = () => {
		sandbox.assert.calledOnce(Settings.get);
		sandbox.assert.calledWithExactly(Settings.get, 'clients');
	};

	it('should return the default table when no setting found', () => {

		sandbox.stub(Settings, 'get')
			.returns(undefined);

		assert.deepEqual(modelClient.table, 'clients');

		assertSettingsCall();
	});

	it('should return the default databaseKey when no setting found', () => {

		sandbox.stub(Settings, 'get')
			.returns(undefined);

		assert.deepEqual(modelClient.databaseKey, '_default');

		assertSettingsCall();
	});

	it('should return a custom table when setting found', () => {

		sandbox.stub(Settings, 'get')
			.returns({ table: 'custom-table' });

		assert.deepEqual(modelClient.table, 'custom-table');

		assertSettingsCall();
	});

	it('should return a custom databaseKey when setting found', () => {

		sandbox.stub(Settings, 'get')
			.returns({ databaseKey: 'custom-database-key' });

		assert.deepEqual(modelClient.databaseKey, 'custom-database-key');

		assertSettingsCall();
	});

});
