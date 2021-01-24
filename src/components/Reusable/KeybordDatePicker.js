import 'date-fns';
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker({
  value,
  name,
  label,
  disabled,
  handleDateChange,
  error,
}) {
  const [selectedDate, setSelectedDate] = useState(value || new Date());

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  const handleDateChangeLocal = (date) => {
    setSelectedDate(date);
    handleDateChange(name, date);
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="none"
            id={`date-picker-dialog-${name}`}
            label={label}
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChangeLocal}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            cancelLabel="Izađi"
            okLabel="U redu"
            variant="inline"
            name={name}
            disabled={disabled}
            autoOk={true}
          />
          {error && (
            <b>
              <div style={{ color: 'red' }}>{error}</div>
            </b>
          )}
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}
