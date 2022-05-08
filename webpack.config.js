import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
const __dirname = path.resolve();


const config = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        hot: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
            minify: {
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        })
    ],
    module: {
        rules: [
            {
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules)/,
                loader: "babel-loader",
                test: /\.ts?$/,
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-typescript"
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".scss", ".js"]
    }
}

export default config;