import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dialog, DialogActions, DialogContent, Button, withStyles } from 'material-ui';

const dialogWidth = 310;
const styles = {
  dialogRoot: {
    minWidth: dialogWidth,
  },
  dialog: {
    width: dialogWidth,

    '&:first-child': {
      padding: 0,
    },
  },
  dialogActions: {
    '&:first-child': {
      marginRight: 'auto',
    },
  },
};

const ModalDialog = ({
  children,
  classes,
  onAccept,
  onDismiss,
  onClear,
  okLabel,
  cancelLabel,
  clearLabel,
  dialogContentClassName,
  clearable,
  buttonComponent: ButtonComponent = Button,
  okButtonProps,
  cancelButtonProps,
  ...other
}) => (
  <Dialog onClose={onDismiss} classes={{ paper: classes.dialogRoot }} {...other}>
    <DialogContent className={classnames(classes.dialog, dialogContentClassName)}>
      { children }
    </DialogContent>

    <DialogActions
      classes={{
        action: clearable && classes.dialogActions,
      }}
    >

      { clearable &&
        <ButtonComponent
          color="primary"
          onClick={onClear}
          aria-label={clearLabel}
        >
          { clearLabel }
        </ButtonComponent>
      }
      <ButtonComponent
        color="primary"
        onClick={onDismiss}
        aria-label={cancelLabel}
        {...cancelButtonProps}
      >
        { cancelLabel }
      </ButtonComponent>

      <ButtonComponent
        color="primary"
        onClick={onAccept}
        aria-label={okLabel}
        {...okButtonProps}
      >
        { okLabel }
      </ButtonComponent>
    </DialogActions>
  </Dialog>
);


ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dialogContentClassName: PropTypes.string,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  clearable: PropTypes.bool.isRequired,
};

ModalDialog.defaultProps = {
  dialogContentClassName: '',
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  okButtonProps: {},
  cancelButtonProps: {}
};

export default withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);
