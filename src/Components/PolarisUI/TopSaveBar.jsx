import { ContextualSaveBar } from '@shopify/polaris'
import PropTypes from 'prop-types'

TopSaveBar.propTypes = {
  disabled: PropTypes.bool,
  handleDiscard: PropTypes.func,
  handleSave: PropTypes.func,
  isDirty: PropTypes.bool,
}

export function TopSaveBar({
  isDirty,
  handleSave,
  handleDiscard,
  disabled = false,
}) {
  return isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
        disabled,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null
}
