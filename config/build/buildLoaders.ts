import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssloaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: options.isDev 
            ? '[path][name]__[local]' 
            : '[hash:base64:8]',
          },
          importLoaders: 1,
        },
      },
      "sass-loader",
    ],
  };

  const typescriptloader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptloader, cssloaders];
}
