const ENV = require('./environment/environment');

const http = require('http');
const port = ENV.PORT || 3000;
const app = require('');

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

