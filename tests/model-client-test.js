'use strict';

const assert = require('assert');

const ModelClient = require('../lib/model-client');

/* eslint-disable prefer-arrow-callback */

describe('ModelClient', () => {

	it('should return the string with the table when table getter is called', function() {
		const modelClient = new ModelClient();
		assert(typeof modelClient.table, 'string');
	});

});
