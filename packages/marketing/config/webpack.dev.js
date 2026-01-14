const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devCOnfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/',
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: {
                ...packageJson.dependencies,
                react: { singleton: true, requiredVersion: packageJson.dependencies.react },
                'react-dom': { singleton: true, requiredVersion: packageJson.dependencies['react-dom'] },
                'react-router-dom': { singleton: true, requiredVersion: packageJson.dependencies['react-router-dom'] },
            },
        }),
    ],
};

module.exports = merge(common, devCOnfig);