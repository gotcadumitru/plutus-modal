import { OverlayColor } from './OverlayConsts'

export interface OverlayProps {
  className?: string
  onClick?: () => void
  overlayColor?: OverlayColor
}
