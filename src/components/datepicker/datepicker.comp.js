import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import {
  createMuiTheme,
  TextField,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { indigo as primary } from '@material-ui/core/colors';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import styles from './DatePicker.module.scss';

const myTheme = createMuiTheme({
  palette: {
    primary: primary
  }
});

const InlineDatePickerDemo = (props) => {
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());
  const [selectedPickupTime, handleSelectedPickupTimeChange] = useState(
    '10:00'
  );
  const [selectedDropoffTime, handleSelectedDropoffTimeChange] = useState(
    '11:00'
  );

  return (
    <ThemeProvider theme={myTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} className={styles.mainContainer}>
        <div className={styles.start}>
          <KeyboardDatePicker
            className={`${styles.item} ${styles.date}`}
            autoOk
            variant='inline'
            inputVariant='outlined'
            label='From'
            format='MM/dd/yyyy'
            value={selectedStartDate}
            InputAdornmentProps={{ position: 'end' }}
            onChange={(date) => handleStartDateChange(date)}
          />

          <TextField
            className={`${styles.item} ${styles.time}`}
            label=''
            value={selectedPickupTime}
            onChange={(date) => handleSelectedPickupTimeChange(date)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton>
                    <AccessTimeIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>

        <div className={styles.end}>
          <KeyboardDatePicker
            className={`${styles.item} ${styles.date}`}
            autoOk
            variant='inline'
            inputVariant='outlined'
            label='Until'
            format='MM/dd/yyyy'
            value={selectedEndDate}
            InputAdornmentProps={{ position: 'end' }}
            onChange={(date) => handleEndDateChange(date)}
          />

          <TextField
            className={`${styles.item} ${styles.time}`}
            label=''
            value={selectedDropoffTime}
            onChange={(date) => handleSelectedDropoffTimeChange(date)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton>
                    <AccessTimeIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default InlineDatePickerDemo;
