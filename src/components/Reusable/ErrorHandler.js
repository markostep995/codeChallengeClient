import React from 'react';
import withTranslations from '../../utils/HighOrderComponent';

const ErrorHandler = (props) => {
  if (props.error && !props.isModalOpened) {
    if (props.error.message) {
      return (
        <div id="errorAlert" className="col-md-6 m-auto">
          <div className="alert alert-danger">
            <button
              class="close closeIcon"
              type="button"
              data-dismiss="alert"
              onClick={props.deleteError}
            >
              ×
            </button>
            <strong>{props.error.message}</strong>
          </div>
        </div>
      );
    }
  }
  return null;
};

export default withTranslations(ErrorHandler);
