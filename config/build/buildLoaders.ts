import webpack from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCSSLoader } from './loaders/buildCSSLoader'
import { BuildOptions } from './types/config'

const buildLoaders = (config: BuildOptions): webpack.RuleSetRule[] => {
  const styleLoader = buildCSSLoader(config.isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|webp|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const codeBabelLoader = buildBabelLoader({ ...config, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...config, isTsx: true })

  return [svgLoader, fileLoader, codeBabelLoader, tsxCodeBabelLoader, styleLoader]
}
export default buildLoaders
