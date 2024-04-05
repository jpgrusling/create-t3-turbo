import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'
import { type Preview } from '@storybook/react'

import { preview as basePreview } from '@local/storybook-config'

import './style.css'
import '@local/storybook-config/style.css'

/* eslint-disable import/no-webpack-loader-syntax */
import defaultTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!@local/themes/default.css'

/* eslint-enable import/no-webpack-loader-syntax */

export const parameters = {
  cssVariables: {
    files: {
      /* eslint-disable @typescript-eslint/naming-convention */
      'Default Theme': defaultTheme,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    defaultTheme: 'Default Theme',
  },
}

const preview: Preview = {
  ...basePreview,
  parameters: {
    ...basePreview.parameters,
    ...parameters,
  },
}

export default preview

export const decorators = [cssVariablesTheme]
