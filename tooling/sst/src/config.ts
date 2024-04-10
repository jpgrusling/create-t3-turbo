import { type SSTConfig } from 'sst'

type ConfigOptions = Awaited<ReturnType<SSTConfig['config']>>

type ConfigProps = Partial<ConfigOptions> & Pick<ConfigOptions, 'name'>

function isPromise<T>(value: ConfigProps | Promise<T>): value is Promise<T> {
  return value instanceof Promise
}

export const config = async (config: ConfigProps) => {
  const source = isPromise<ConfigProps>(config) ? await config : config
  return (input: Parameters<SSTConfig['config']>[0]) => {
    return {
      ...source,
      name: source.name,
      region: input.region ?? source.region ?? 'us-east-1',
    } satisfies ConfigOptions
  }
}
