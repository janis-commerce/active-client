'use strict';

const ModelClient = require('./model-client');

class ActiveClient {

	static async getByField(field, value) {

		const modelClient = new ModelClient();

		const clients = await modelClient.getByField(field, value);

		const client = clients && clients.length === 1 ? clients[0] : false;

		return client;
	}

}

module.exports = ActiveClient;
