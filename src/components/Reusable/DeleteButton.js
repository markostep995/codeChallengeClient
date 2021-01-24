import React from 'react';
import { Link } from 'react-router-dom';

const DeleteButton = (props) => {
  return (
    <div>
      <Link onClick={props.click}>
        <i className="fas fa-trash-alt fa-2x" />
      </Link>
    </div>
  );
};

export default DeleteButton;
