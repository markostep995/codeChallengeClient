import React from 'react';
import { Button } from 'react-bootstrap';
import withTranslations from '../../utils/HighOrderComponent';

const ButtonSave = (props) => {
  return (
    <Button
      variant="primary"
      className="col-md-6 m-auto"
      onClick={props.onClick}
    >
      {props.gt.Button.save}
    </Button>
  );
};

export default withTranslations(ButtonSave);
