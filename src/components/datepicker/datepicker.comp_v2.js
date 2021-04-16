import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  Calendar
} from '@material-ui/pickers';
import {
  createMuiTheme,
  TextField,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { indigo as primary } from '@material-ui/core/colors';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import styles from './DatePicker.module.scss';

import { availableTimes } from '../../utils/constants';

const myTheme = createMuiTheme({
  palette: {
    primary: primary
  }
});

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      padding: 0,
      '& .MuiButtonBase-root': {
        paddingRight: 10,
        paddingLeft: 0
      },
      '& .MuiInputBase-input': {
        paddingRight: 0,
        paddingLeft: 15
      }
    }
  }
});

const DatePicker = (props) => {
  const [selectedStartDate, setStartDate] = useState(new Date());
  const [selectedEndDate, setEndDate] = useState(new Date());
  const [selectedPickupTime, setSelectedPickupTime] = useState('10:00');
  const [selectedDropoffTime, setSelectedDropoffTime] = useState('11:00');
  const [fromOpen, setFromOpen] = useState(false);
  const [untilOpen, setUntilOpen] = useState(false);

  const classes = useStyles();

  const handleDropdown = (source, time) => {
    if (source === 'from') {
      setSelectedPickupTime(time);
      setFromOpen(false);
    } else {
      setSelectedDropoffTime(time);
      setUntilOpen(false);
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        className={styles.mainContainer}>

        <Calendar date={selectedEndDate} onChange={setEndDate} disablePast className={styles.calendar} />

        <div className={styles.start}>
          <KeyboardDatePicker
            className={`${classes.root} ${styles.itemDate}`}
            // className={classes.root}
            autoOk
            variant='inline'
            inputVariant='outlined'
            label='From'
            format='MM/dd/yyyy'
            value={selectedStartDate}
            InputAdornmentProps={{ position: 'end' }}
            onChange={(date) => setStartDate(date)}
          />

          <div
            className={styles.itemTime}
            onClick={() => setFromOpen(!fromOpen)}>
            <TextField
              className={classes.root}
              label=''
              value={selectedPickupTime}
              onChange={(date) => setSelectedPickupTime(date)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton>
                      <AccessTimeIcon className={styles.iconButton} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          {fromOpen && (
            <div className={styles.timeDropdown}>
              {availableTimes.map((time) => {
                return (
                  <p
                    className={styles.timeValue}
                    onClick={() => handleDropdown('from', time)}>
                    {time}
                  </p>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.end}>
          <KeyboardDatePicker
            className={`${classes.root} ${styles.itemDate}`}
            // className={classes.root}
            autoOk
            variant='inline'
            inputVariant='outlined'
            label='Until'
            format='MM/dd/yyyy'
            value={selectedEndDate}
            InputAdornmentProps={{ position: 'end' }}
            onChange={(date) => setEndDate(date)}
          />

          <div
            className={styles.itemTime}
            onClick={() => setUntilOpen(!untilOpen)}>
            <TextField
              className={classes.root}
              label=''
              value={selectedDropoffTime}
              onChange={(date) => setSelectedDropoffTime(date)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setUntilOpen(!untilOpen)}>
                      <AccessTimeIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          {untilOpen && (
            <div className={styles.timeDropdown}>
              {availableTimes.map((time) => {
                return (
                  <p
                    className={styles.timeValue}
                    onClick={() => handleDropdown('until', time)}>
                    {time}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default DatePicker;
