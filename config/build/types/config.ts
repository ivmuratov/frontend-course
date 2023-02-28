export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildAnalyzeEnv {
    analyze: boolean;
    analyzePort: number;
}

export interface BuildEnv extends BuildAnalyzeEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions extends BuildEnv {
    paths: BuildPaths;
    isDev: boolean;
}
