import React from 'react';
import { Link } from 'react-router-dom';

const CreateButton = (props) => {
  return (
    <div>
      <Link to={props.route}>
        <button className="buttonCreateUpdate">Add</button>
      </Link>
    </div>
  );
};

export default CreateButton;
