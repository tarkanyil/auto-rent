import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  Calendar
} from '@material-ui/pickers';
import {
  createMuiTheme,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { indigo as primary } from '@material-ui/core/colors';

import styles from './DatePicker.module.scss';

import Input from '../input/input.comp';

import { availableTimes } from '../../utils/constants';

const myTheme = createMuiTheme({
  palette: {
    primary: primary
  }
});

const DatePicker = (props) => {


  return (
    <ThemeProvider theme={myTheme}>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        className={styles.mainContainer}>

        <Calendar
          date={selectedEndDate}
          onChange={setEndDate}
          disablePast
          className={styles.calendar}
        />

        <Calendar
          date={selectedEndDate}
          onChange={setEndDate}
          disablePast
          className={styles.calendar}
        />

        <Input />
        
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default DatePicker;
