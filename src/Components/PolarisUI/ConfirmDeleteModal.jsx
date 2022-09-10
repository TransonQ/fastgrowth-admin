import { Modal } from '@shopify/polaris'
import PropTypes from 'prop-types'

ConfirmDeleteModal.propTypes = {
  buttonText: PropTypes.string,
  content: PropTypes.string,
  deleteComfirmActive: PropTypes.bool,
  disabled: PropTypes.bool,
  handleConfirmDelete: PropTypes.func,
  title: PropTypes.string,
  toggleDeleteComfirmActive: PropTypes.func,
}

export function ConfirmDeleteModal({
  title = 'Confirm delete',
  deleteComfirmActive,
  toggleDeleteComfirmActive,
  content = 'Are you sure you want to delete the selected items?',
  handleConfirmDelete,
  buttonText = 'Delete',
  disabled = false,
}) {
  return (
    <Modal
      open={deleteComfirmActive}
      onClose={toggleDeleteComfirmActive}
      title={title}
      primaryAction={{
        destructive: true,
        content: buttonText,
        onAction: handleConfirmDelete,
        disabled,
      }}
      secondaryActions={[
        { content: 'Cancel', onAction: toggleDeleteComfirmActive },
      ]}
    >
      <Modal.Section>{content}</Modal.Section>
    </Modal>
  )
}
