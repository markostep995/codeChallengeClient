import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const confirmDialog = (message, action, optionalMessage) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div id="react-confirm-alert">
          <div class="react-confirm-alert">
            <div class="custom-ui button">
              <p>Da li želite da {message}?</p>
              <button onClick={onClose}>NE</button>
              <button
                onClick={() => {
                  {
                    action();
                  }
                  onClose();
                }}
              >
                DA{optionalMessage}
              </button>
            </div>
          </div>
        </div>
      );
    },
  });
};
