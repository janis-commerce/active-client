'use strict';

const { Model } = require('@janiscommerce/model-controller');

class ModelClient extends Model {

	get table() {
		return 'clients';
	}

	async getByField(field, value) {

		if(!field || !value)
			return;

		return this.get({
			filters: { [field]: value }
		});
	}

}

module.exports = ModelClient;
