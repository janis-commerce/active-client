'use strict';

const path = require('path');
const assert = require('assert');
const mockRequire = require('mock-require');

const sandbox = require('sinon').createSandbox();

const ActiveClient = require('../');
const { ActiveClientError } = require('../lib');

/* eslint-disable prefer-arrow-callback */

describe('ActiveClient', () => {

	/*
	before(() => {
		mockRequire(path.join(process.env(), 'config', 'database.json'), {

		});
	});

	after(() => {
		mockRequire.stopAll();
	});
*/

	it('something', async function() {

		await ActiveClient.getClient();

	});

});
