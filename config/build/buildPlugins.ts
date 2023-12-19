import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { getEnv } from './getEnv'
import { BuildOptions } from './types/config'

const buildPlugins = (config: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: config.paths.html,
      favicon: config.paths.favicon,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(config.isDev),
      'process.env': getEnv(),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
      // disable ts errors
      issue: {
        include: [],
      },
    }),
    // new CompressionPlugin(), // gzip
  ]

  if (config.isWebpackBuild) {
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              ignore: ['**/index.html', '**/favicon.ico'],
            },
          },
        ],
      }),
    )
  }

  if (config.isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshPlugin())
  }
  if (config.isAnalyzerEnabled) {
    plugins.push(new BundleAnalyzerPlugin() as any)
  }

  return plugins
}
export default buildPlugins
