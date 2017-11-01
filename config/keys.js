// determine what credentials to use

if (process.env.NODE_ENV === 'production') {
    // production keys
    module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'test') {
    module.exports = require('./test');
} else {
    // development keys
    module.exports = require('./dev');
}