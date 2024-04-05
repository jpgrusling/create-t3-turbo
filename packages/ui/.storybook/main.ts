import { join } from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { ProvidePlugin } from 'webpack'

import { config as baseConfig } from '@local/storybook-config'

const config: StorybookConfig = {
  ...baseConfig,
  addons: [
    ...(baseConfig.addons || []),
    // eslint-disable-next-line storybook/no-uninstalled-addons
    '@etchteam/storybook-addon-css-variables-theme/dist/preset',
  ],
  webpackFinal: config => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve?.plugins || []),
        new TsconfigPathsPlugin({
          configFile: join(__dirname, '../tsconfig.json'),
        }),
      ],
    }

    config.plugins = [
      ...(config.plugins || []),
      new ProvidePlugin({
        React: 'react',
      }),
    ]

    return config
  },
}

export default config
