const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ],
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: 'localhost',
        port: 3000,
        watchContentBase: true,
    },
}