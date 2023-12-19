import { FC, memo, useState } from 'react'
import { BUTTON_TEXT, MODAL_TITLE } from 'shared/defaults/text'
import Button, { ButtonTheme } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'
import { OverlayColor } from 'shared/ui/Overlay'

const PlutusModal: FC = () => {
  const [isConfirmModalShow, setIsConfirmModalShow] = useState(false)

  const onConfirmClick = async () => {
    alert('Thx')
    setIsConfirmModalShow(false)
  }

  const onCloseModal = () => setIsConfirmModalShow(false)

  const onOpenModalClick = () => setIsConfirmModalShow(true)
  return (
    <>
      <Modal onClose={onCloseModal} isOpen={isConfirmModalShow} overlayColor={OverlayColor.BLACK}>
        <div className='modal__header'>
          <div className='modal__title'>Plutus Modal</div>
        </div>
        <div className='modal__body'>Do you like this modal?</div>
        <div className='modal__footer'>
          <Button onClick={onCloseModal} theme={ButtonTheme.OUTLINE_RED}>
            {MODAL_TITLE.NO}
          </Button>
          <Button onClick={onConfirmClick}>{MODAL_TITLE.YES}</Button>
        </div>
      </Modal>
      <Button onClick={onOpenModalClick} theme={ButtonTheme.OUTLINE_RED}>
        {BUTTON_TEXT.DISPLAY_MODAL}
      </Button>
    </>
  )
}
export default memo(PlutusModal)
