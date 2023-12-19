import classNames from 'classnames'
import { FC, memo } from 'react'
import './overlay.scss'
import { OverlayColor } from './OverlayConsts'
import { OverlayProps } from './OverlayTypes'

const Overlay: FC<OverlayProps> = ({ className, onClick, overlayColor = OverlayColor.BLACK }) => {
  const overlayClassNames = classNames('overlay', className, {
    'overlay--black': overlayColor === OverlayColor.BLACK,
    'overlay--red': overlayColor === OverlayColor.RED,
    'overlay--blue': overlayColor === OverlayColor.BLUE,
  })
  return <div onClick={onClick} className={overlayClassNames} />
}

export default memo(Overlay)
