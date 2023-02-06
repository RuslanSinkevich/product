const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;



module.exports = {
  //context: path.resolve(__dirname, "src"), // папка проекта
  mode: "development",
  // two chunks (две точки входа)
  entry: {
    main: ["./src/index.tsx"]
    },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // [name] паттерн имён динамически указывает на ключи (main, analytics)
    // [contenthash] для корректной работы кэша
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  //devtool: isDev ? 'source-map' : ' ',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          publicPath: '/',
        },
      },
    ],
  },
  optimization: {
    minimize: isProd,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
