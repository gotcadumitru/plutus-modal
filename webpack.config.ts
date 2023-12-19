import { config } from 'dotenv'
import { resolve } from 'path'
import { Configuration } from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

config({
  path: resolve(__dirname, `.env.${process.env.ENV}`),
})

const paths: BuildPaths = {
  entry: resolve(__dirname, 'src', 'index.tsx'),
  html: resolve(__dirname, 'public', 'index.html'),
  favicon: resolve(__dirname, 'public', 'favicon.ico'),
  build: resolve(__dirname, 'build'),
  src: resolve(__dirname, 'src'),
}

export default (env: BuildEnv) => {
  console.log(env)

  const mode: BuildMode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000
  const isAnalyzerEnabled = env.analyzer === 'enabled'
  const isWebpackBuild = env.WEBPACK_BUILD || false
  const webpackConfig: Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
    isAnalyzerEnabled,
    isWebpackBuild,
  })
  return webpackConfig
}
