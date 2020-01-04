const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    // Enable devtool using source-map for easy debugging
    devtool: 'source=map',
    watch: true,
    resolve: {
        // Look for typescript file to bundle
        extensions: ['ts', 'tsx']
    },
    module: {
        rules: [
            // Do some test against .ts or .tsx files, but exluce the node_modules
            // Use ts-loader for this purpose
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}