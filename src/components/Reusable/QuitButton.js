import React from 'react';
import { Button } from 'react-bootstrap';
import withTranslations from '../../utils/HighOrderComponent';

const QuitButton = (props) => {
  return (
    <Button
      variant="secondary"
      className="col-md-6 m-auto"
      onClick={props.onClick}
    >
      {props.gt.Button.quit}
    </Button>
  );
};

export default withTranslations(QuitButton);
