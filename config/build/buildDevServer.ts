import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

const buildDevServer = (config: BuildOptions): DevServerConfiguration => ({
  port: config.port,
  open: true,
  historyApiFallback: true,
  hot: true,
  allowedHosts: 'all',
  client: {
    webSocketURL: 'wss://localhost:3000/ws',
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
})
export default buildDevServer
