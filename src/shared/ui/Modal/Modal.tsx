import classNames from 'classnames'
import { FC } from 'react'
import { useSwipeable } from 'react-swipeable'
import { CSSTransition } from 'react-transition-group'
import VscChromeClose from 'shared/assets/icons/VscChromeClose.svg'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import Overlay from 'shared/ui/Overlay'
import { Portal } from 'shared/ui/Portal'
import './modal.scss'
import type { ModalPropsType } from './modalTypes'

const Modal: FC<ModalPropsType> = ({
  onClose,
  CloseIcon = VscChromeClose,
  isOpen,
  containerStyle,
  className,
  overlayColor,
  ...props
}) => {
  useModal({ onClose, isOpen })

  // TODO animation for swipe
  const handlers = useSwipeable({
    onSwiped: onClose,
    trackTouch: true,
    trackMouse: true,
    delta: 200,
  })

  const modalContentClassName = classNames('modal__content', className)
  const modalClassName = classNames('modal')
  return (
    <Portal>
      <CSSTransition in={isOpen} timeout={200} classNames='modal-anim' unmountOnExit>
        <div className={modalClassName}>
          <Overlay onClick={onClose} overlayColor={overlayColor} />
          <div {...handlers} className={modalContentClassName}>
            {!!CloseIcon && <CloseIcon onClick={onClose} className='modal__close-icon' />}
            {props.children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  )
}
export default Modal
