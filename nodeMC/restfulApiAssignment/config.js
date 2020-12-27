// Create and export configuration files

// Container for all enviornments
var enviornments = {};

// Staging default enviornment
enviornments.staging = {
    'httpPort': 3000,
    'envName': 'staging'
}

// Production Object
enviornments.production = {
    'httpPort': 5000,
    'envName': 'production'
}

// Determine what enviornemt was passed as the command line argument
var currentEnv = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current enviornment is one of the enviornments above, if not default to staging
var enviornemtToExport = typeof(enviornments[currentEnv]) === 'object' ? enviornemtToExport[currentEnv] : enviornments.staging;

// Export the module
module.exports = enviornemtToExport; 