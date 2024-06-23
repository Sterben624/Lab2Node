const express = require('express');
const config = require('../config/config');
const apiRoutes = require('../routes/apiRoutes');

const app = express();
const port = config.get('proxyPort');

app.use('/', apiRoutes);

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
