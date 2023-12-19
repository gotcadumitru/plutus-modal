import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import Modal from 'shared/ui/Modal/Modal'

const meta = {
  title: 'shared/Modal',
  parameters: {},
  component: Modal,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARYY: Story = {}
