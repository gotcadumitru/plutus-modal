/* eslint-disable @typescript-eslint/ban-ts-comment */
export const getEnv = () => {
  const raw = Object.keys(process.env).reduce((env, key) => {
    // @ts-ignore
    env[key] = process.env[key]
    return env
  }, {})

  const env = Object.keys(raw).reduce((envs, key) => {
    // @ts-ignore
    envs[key] = JSON.stringify(raw[key])
    return envs
  }, {})
  return env
}
