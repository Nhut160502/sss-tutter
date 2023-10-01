import { Modal as ModaCustom } from 'antd'
import React from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { hiddenModal } from 'src/providers/modalSlice'

const Modal = (props) => {
  const { handleOk } = props
  const dispatch = useDispatch()
  const modal = useSelector((state) => state?.modal)
  console.log(modal)
  const handleCancel = () => {
    dispatch(hiddenModal())
  }
  return (
    <ModaCustom
      className="modal-confirm"
      title={
        <>
          <img
            alt=""
            className="icon-warning"
            src="https://w7.pngwing.com/pngs/1022/907/png-transparent-yellow-and-black-warning-sign-icon-warning-icons-angle-triangle-sign-thumbnail.png"
          />
          <p>Warning</p>
        </>
      }
      open={modal?.open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Bạn muốn xóa dử liệu này? Dử liệu sau khi xóa sẽ không thể khôi phục được!</p>
    </ModaCustom>
  )
}

Modal.propTypes = {
  handleOk: PropTypes.func,
}

export default Modal
