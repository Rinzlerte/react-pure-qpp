import  webpack  from "webpack";
import path from "path";
import { BuildOptions } from "./types";
import { buildLoaders } from "./buildLoaders";
import { buildPluggins } from "./buildPluggins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const { paths, mode, isDev } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            // publicPath: '/',
        },
        plugins: buildPluggins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        devtool:  isDev ? 'source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: {
            runtimeChunk: 'single',
        },
    }
}