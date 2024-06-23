const axios = require('axios');
const config = require('../config/config');

const apiClient = axios.create({
    baseURL: config.get('apiUrl').toString()
});

module.exports = apiClient;
