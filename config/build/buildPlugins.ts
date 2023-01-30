import HTMLWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/config";

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
    ]
}