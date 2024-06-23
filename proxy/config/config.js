const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

convict.addFormat({
    name: 'url',
    validate: (val) => {
        if (typeof val !== 'string') {
            throw new Error('must be a string');
        }
        try {
            new URL(val);
        } catch (e) {
            throw new Error('must be a valid URL');
        }
    },
    coerce: (val) => {
        if (typeof val !== 'string') {
            return String(val);
        }
        return val;
    }
});

const config = convict({
    proxyPort: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3001,
        env: 'PROXY_PORT'
    },
    apiUrl: {
        doc: 'API URL to proxy requests to.',
        format: 'url',
        default: 'http://localhost:3000',
        env: 'API_URL'
    }
});

config.validate({ allowed: 'strict' });

module.exports = config;
