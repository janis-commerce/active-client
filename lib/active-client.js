'use strict';

const ModelClient = require('./model-client');

class ActiveClient {

	static async getByField(field, value) {

		const modelClient = new ModelClient();

		const clients = await modelClient.getByField(field, value);

		const client = clients && clients.length === 1 ? clients[0] : false;

		if(client)
			client.getInstance = this.getInstance(client);

		return client;
	}

	static getInstance(client) {
		return TheClass => {
			const instance = new TheClass();
			instance.client = client;

			return instance;
		};
	}

}

module.exports = ActiveClient;
