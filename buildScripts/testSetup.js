require('babel-register');

// Disable webpack features Mocha doesn't understand.
require.extensions['.css'] = function() {};
