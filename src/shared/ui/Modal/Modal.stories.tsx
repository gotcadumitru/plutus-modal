import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import Button, { ButtonTheme } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal/Modal'
import { OverlayColor } from 'shared/ui/Overlay'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: (
      <div>
        <div className='modal__header'>
          <div className='modal__title'>Modal</div>
        </div>
        <div className='modal__body'>Do you like this modal?</div>
        <div className='modal__footer'>
          <Button theme={ButtonTheme.OUTLINE_RED}>Close</Button>
        </div>
      </div>
    ),
    isOpen: true,
  },
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARYY: Story = {}
export const RED_OVERLAY: Story = {
  args: {
    overlayColor: OverlayColor.RED,
  },
}

export const BLUE_OVERLAY: Story = {
  args: {
    overlayColor: OverlayColor.BLUE,
  },
}
