'use strict';

const { Model } = require('@janiscommerce/model-controller');

class ModelClient extends Model {

	get table() {
		return 'clients';
	}

	get dbname() {
		return 'clients';
	}

	getTable() {
		return 'clients';
	}

}

module.exports = ModelClient;
