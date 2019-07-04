'use strict';

const { Model } = require('@janiscommerce/model-controller');
const Settings = require('@janiscommerce/settings');

class ModelClient extends Model {

	get settings() {
		return Settings.get('clients') || {};
	}

	get databaseKey() {
		return this.settings.databaseKey || '_default';
	}

	get table() {
		return this.settings.table || 'clients';
	}

	async getByField(field, value) {

		if(!field || !value)
			return;

		return this.get({
			filters: { [field]: value },
			limit: 1
		});
	}

}

module.exports = ModelClient;
