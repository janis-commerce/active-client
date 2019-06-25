'use strict';

// const ActiveClientError = require('./active-client-error');
const ModelClient = require('./model-client');

class ActiveClient {

	static async getClient() {

		const modelClient = new ModelClient();

		const clients = await modelClient.get();

		console.log(clients);

	}

}

module.exports = ActiveClient;
