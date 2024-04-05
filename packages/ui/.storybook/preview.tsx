// import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'
import { type Preview } from '@storybook/react'

import { preview as basePreview } from '@local/storybook-config'

import './style.css'
import '@local/storybook-config/style.css'

/* eslint-disable import/no-webpack-loader-syntax */
// import blue from '!!style-loader?injectType=lazyStyleTag!css-loader!themes/blue.css'
// import green from '!!style-loader?injectType=lazyStyleTag!css-loader!themes/green.css'
// import navy from '!!style-loader?injectType=lazyStyleTag!css-loader!themes/navy.css'
// import red from '!!style-loader?injectType=lazyStyleTag!css-loader!themes/red.css'

/* eslint-enable import/no-webpack-loader-syntax */

export const parameters = {
  // cssVariables: {
  //   files: {
  //     /* eslint-disable @typescript-eslint/naming-convention */
  //     'Blue Theme': blue,
  //     'Green Theme': green,
  //     'Navy Theme': navy,
  //     'Red Theme': red,
  //     /* eslint-enable @typescript-eslint/naming-convention */
  //   },
  //   defaultTheme: 'Blue Theme',
  // },
}

const preview: Preview = {
  ...basePreview,
  parameters: {
    ...basePreview.parameters,
    ...parameters,
  },
}

export default preview

// export const decorators = [cssVariablesTheme]
