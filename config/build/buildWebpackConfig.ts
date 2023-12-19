import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import webpack from 'webpack'
import buildDevServer from './buildDevServer'
import buildLoaders from './buildLoaders'
import buildPlugins from './buildPlugins'
import buildResolvers from './buildResolvers'
import { BuildOptions } from './types/config'

const buildWebpackConfig = (config: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = config
  return {
    mode,
    module: {
      rules: buildLoaders(config),
    },
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
        '...',
        new CssMinimizerPlugin(),
      ],
    },
    resolve: buildResolvers(config),
    entry: paths.entry,
    output: {
      publicPath: isDev ? 'https://localhost:3000/' : '/',
      filename: 'main.[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    target: 'browserslist',
    plugins: buildPlugins(config),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(config) : undefined,
  }
}
export default buildWebpackConfig
