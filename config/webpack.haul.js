const path = require('path');

const { DefinePlugin } = require('webpack');

const { CheckerPlugin } = require('awesome-typescript-loader')

const appDir = path.resolve(__dirname, '..');

const paths = {
    appSrc: path.resolve(appDir, 'src'),
    nodeModules: path.resolve(appDir, 'node_modules'),
};

module.exports = ({ platform }, { module, resolve }) => {
    return {
        entry: path.resolve(paths.appSrc, 'index.native.tsx'),

        module: {
            ...module,
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                {
                    test: /\.(js|jsx|mjs)$/,
                    include: [
                        path.resolve(paths.nodeModules, 'delay'),
                        path.resolve(paths.nodeModules, 'p-defer'),
                    ],
                    loader: 'babel-loader',
                    options: {
                        compact: true,
                    },
                },
                ...module.rules,
            ],
        },

        resolve: {
            ...resolve,
            extensions: [
                `.${platform}.ts`, `.${platform}.tsx`,
                '.native.ts', '.native.tsx',
                '.ts', '.tsx',
                ...resolve.extensions,
            ],
        },

    };
};
