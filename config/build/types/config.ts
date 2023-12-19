export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  favicon: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  isAnalyzerEnabled: boolean
  isWebpackBuild: boolean
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  analyzer?: string
  WEBPACK_BUILD?: boolean
}
