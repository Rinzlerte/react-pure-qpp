import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from './types';
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildPluggins({paths}: BuildOptions): webpack.WebpackPluginInstance[]{
   
    const typescriptbuilder = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            // filename: "css/[name].[contenthash:8]css",
            // chunkFilename: "css/[name].[contenthash:8]css",
            linkType: "text/css",
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
            attributes: {
                id: "target",
                "data-target": "example",
            },
        })
    ]

    return typescriptbuilder 
}