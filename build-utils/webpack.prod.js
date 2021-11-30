/* eslint-disable no-undef */
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.production"),
    }),
  ],
  devtool: "eval-source-map",
};
