import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';

import styles from './DatePicker.module.scss';

const DatePicker = () => {
  const [value, setValue] = React.useState([null, null]);

  const StyledInput = withStyles({
    root: {
      color: 'red'
    }
  })(TextField);

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateRangePicker
          startText='Mobile start'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              {/* <StyledInput
                {...startProps}
                variant='filled'
                label='LackoLabel'

              /> */}
              <TextField
                {...startProps}
                variant='outlined'
                label='Start date'
                className={styles.textField}
                fullWidth
              />
              <Box sx={{ mx: 2 }}> </Box>
              <TextField {...endProps} variant='outlined' label='End date' fullWidth />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
