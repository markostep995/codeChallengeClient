import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxAutocomplete(props) {
  return (
    <>
      <Autocomplete
        id={props.id}
        options={props.data.filter((d) => props.text(d) != null)}
        getOptionLabel={(a) => props.text(a)}
        value={props.updateValue}
        style={props.style || { width: '100%' }}
        disabled={props.disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              shrink: true,
            }}
            label={props.placeholder}
            variant="outlined"
          />
        )}
        size="small"
        onChange={(event, selectedItem) => {
          props.dataValuesStrings
            ? props.changeValue(selectedItem != null ? selectedItem.value : '')
            : props.changeValue(selectedItem != null ? selectedItem.id : '');
        }}
      />
      {props.error && (
        <b>
          <div style={{ color: 'red' }}>{props.error}</div>
        </b>
      )}
    </>
  );
}
