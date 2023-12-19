import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  reactRouter: reactRouterParameters({
    routing: { path: '*' },
  }),
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
export const decorators = [StyleDecorator, withRouter]
