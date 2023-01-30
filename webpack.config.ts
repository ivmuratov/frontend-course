import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths } from './config/build/types/config';

const mode: BuildMode = 'production';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const isDev = mode !== 'production'

const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
})

export default config;