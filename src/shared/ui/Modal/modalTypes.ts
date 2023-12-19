import type { CSSProperties, FC, ReactNode, SVGAttributes } from 'react'
import type { OverlayProps } from 'shared/ui/Overlay'

export interface ModalPropsType extends Pick<OverlayProps, 'overlayColor'> {
  className?: string
  children: ReactNode
  containerStyle?: CSSProperties
  onClose?: () => void
  isOpen?: boolean
  CloseIcon?: FC<SVGAttributes<SVGElement>>
}
