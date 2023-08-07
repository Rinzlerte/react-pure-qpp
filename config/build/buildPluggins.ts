import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from './types';


export function buildPluggins({paths}: BuildOptions): webpack.WebpackPluginInstance[]{
   
    const typescriptbuilder = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]

    return typescriptbuilder 
}