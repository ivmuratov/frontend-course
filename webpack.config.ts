import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const analyze = env.analyze || false;
  const ANALYZE_PORT = env.analyzePort || 8888;
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    mode,
    analyze,
    paths,
    isDev,
    port: PORT,
    analyzePort: ANALYZE_PORT,
  });
};
