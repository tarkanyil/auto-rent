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

              <div className={styles.fieldsContainer}>
                <TextField
                  {...startProps}
                  className={styles.startField}
                  variant='standard'
                  label='Start date'
                  fullWidth
                />
                {/* <Box sx={{ mx: 2 }}> </Box> */}
                <TextField
                  {...endProps}
                  className={styles.endField}
                  variant='standard'
                  label='End date'
                  fullWidth
                />
              </div>

          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
