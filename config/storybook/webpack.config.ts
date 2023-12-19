import { config } from 'dotenv'
import fs from 'fs'
import path, { resolve } from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { getEnv } from '../build/getEnv'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader'
import { BuildPaths } from '../build/types/config'

config({
  path: resolve(__dirname, '..', '..', '.env.dev'),
})
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    build: '',
    html: '',
    entry: '',
    favicon: '',
  }
  if (!config?.resolve?.modules || !config?.resolve?.extensions || !config?.module?.rules)
    return config
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts,tsx')

  // remove storybook css rules
  config.module.rules = config.module.rules.filter((f: any) => f.test?.toString() !== '/\\.css$/')

  const styleLoader = buildCSSLoader(true)
  config.module.rules.push(styleLoader)

  config.module.rules = config.module.rules.map((rule) => {
    const ruleLocal = rule as RuleSetRule
    if (/svg/.test(ruleLocal.test as string)) {
      return {
        ...ruleLocal,
        exclude: /\.svg$/i,
      }
    }
    return ruleLocal
  })

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  config.module.rules.push(svgLoader)

  config!.plugins!.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        'process.env': getEnv(),
      }),
      new webpack.NormalModuleReplacementPlugin(/src/, (resource) => {
        // if __mocks__ folder exists, extract his content on build only
        if (!resource.createData.resource) return

        let pathSplit = resource.createData.resource.split('/')
        pathSplit.splice(pathSplit.length - 1, 0, '__mocks__')
        pathSplit = pathSplit.join('/')
        if (!fs.existsSync(pathSplit)) return

        resource.request = pathSplit
        resource.createData.resource = pathSplit
      }),
  )

  return config
}
