import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'
import { v4 } from 'uuid'

const meta = {
  title: 'pages/NotFoundPage',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `/${v4()}` },
    }),
  },
  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {}
