import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export const confirmDialog = (message, action, optionalMessage) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div id="react-confirm-alert">
          <div class="react-confirm-alert">
            <div class="custom-ui button">
              <p>Do you want to {message}?</p>
              <button onClick={onClose}>NO</button>
              <button
                onClick={() => {
                  {
                    action();
                  }
                  onClose();
                }}
              >
                YES{optionalMessage}
              </button>
            </div>
          </div>
        </div>
      );
    },
  });
};
