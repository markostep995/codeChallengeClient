import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputField(props) {
  return (
    <>
      <TextField
        id="outlined-basic"
        InputLabelProps={{
          shrink: true,
        }}
        label={props.placeholder}
        variant="outlined"
        style={
          props.style || !props.disabled
            ? ({ width: '100%' }, { backgroundColor: 'white' })
            : null
        }
        size="small"
        name={props.name}
        onChange={props.onChange}
        disabled={props.disabled}
        value={props.value == null ? '' : props.value}
        error={props.error}
        className={'form-control'}
        required={props.required}
        autoComplete={props.autoComplete}
        type={props.type}
        multiline={props.multiline}
        rows={props.rows}
        error={props.error}
      />
      {props.error && (
        <b>
          <div style={{ color: 'red' }}>{props.error}</div>
        </b>
      )}
    </>
  );
}
