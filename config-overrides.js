const { join } = require("path");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  root: join(__dirname),
  src: join(__dirname, "src")
};

module.exports = (config, env) => {
  config.resolve.alias = {
    models: join(paths.src, "models"),
    components: join(paths.src, "components"),
    config: join(paths.src, "config"),
    app: join(paths.src, "application"),
    images: join(paths.src, "images"),
    contexts: join(paths.src, "contexts"),
    services: join(paths.src, "services"),
    utils: join(paths.src, "utils")
  };

  // config.module.rules.push({
  //   test: /\.css$/,
  //   loader: "style-loader!css-loader",
  //   include: /flexboxgrid/
  // });

  // config.module.rules.push({
  //   test: /(\.scss|\.css)$/,
  //   loader: ExtractTextPlugin.extract(
  //     "style",
  //     "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap"
  //   )
  // });

  return config;
};
