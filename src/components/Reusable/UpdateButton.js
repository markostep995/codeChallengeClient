import React from 'react';
import { Link } from 'react-router-dom';

const UpdateButton = (props) => {
  return (
    <div>
      <Link to={props.route}>
        <i className="fas fa-edit fa-2x" />
      </Link>
    </div>
  );
};

export default UpdateButton;
