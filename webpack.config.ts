import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl;
  }

  if (mode === 'production') {
    return '/api';
  }

  return 'http://localhost:8080';
}

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode || 'development';
  const analyze = env.analyze || false;
  const ANALYZE_PORT = env.analyzePort || 8888;
  const isDev = mode === 'development';
  const apiUrl = getApiUrl(mode, env?.apiUrl);
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    mode,
    analyze,
    paths,
    isDev,
    apiUrl,
    port: PORT,
    analyzePort: ANALYZE_PORT,
    project: 'frontend',
  });
};
