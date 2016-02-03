//https://christianalfoni.github.io/react-webpack-cookbook/Authoring-libraries.html
var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "weavereact.js",
        publicPath: "js/",
        library: "weavereact",
        libraryTarget: "umd",
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ["babel"],
                exclude: /node_modules/
            }
		]
    },
    plugins: [
		new webpack.NoErrorsPlugin()
	],
    externals: [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        },
        {
            "weavejs": {
                root: 'weavejs'
            }
        },
        {
            "Weave": {
                root: 'Weave'
            }
        }
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", ".scss", ".md"]
    }
};
