import React from 'react';
import classnames from 'classnames';

const Input = (props) => {
  let tip;
  if (props.tip == null) {
    tip = 'text';
  } else {
    tip = props.tip;
  }

  return (
    <div>
      <input
        type={tip}
        id={props.name}
        className={classnames('inputField form-control', {
          'is-invalid': props.error,
        })}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

export default Input;
