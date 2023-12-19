import webpack from 'webpack'
import { BuildOptions } from './types/config'

const buildResolvers = (config: BuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  preferAbsolute: true,
  modules: [config.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {},
})
export default buildResolvers
