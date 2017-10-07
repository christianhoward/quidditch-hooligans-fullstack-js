// determine what credentials to use

if (process.env.NODE_ENV === 'production') {
    // production keys
    module.exports = require('./prod');
} else {
    // development keys
    module.exports = require('./dev');
}