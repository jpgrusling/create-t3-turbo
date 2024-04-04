import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { type Preview } from '@storybook/react'

import '../src/styles/styles.css'

export const preview: Preview = {
  parameters: {
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [{ id: 'duplicate-id', selector: '*:not(#storybook-root)' }],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        includeNames: true,
        method: 'alphabetical',
      },
    },
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        pixel6: {
          name: 'Pixel 6',
          styles: {
            width: '412px',
            height: '915px',
          },
          type: 'mobile',
        },
        pixel6pro: {
          name: 'Pixel 6 Pro',
          styles: {
            width: '412px',
            height: '892px',
          },
          type: 'mobile',
        },
        galaxyfold: {
          name: 'Galaxy Fold',
          styles: {
            width: '280px',
            height: '653px',
          },
          type: 'mobile',
        },
      },
    },
  },
}

export default preview
