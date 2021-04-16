//
import { useState } from 'react';
import styles from './Input.module.scss';
import DateIcon from '@material-ui/icons/Event';
import TimeIcon from '@material-ui/icons/Schedule';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  Calendar,
  DatePicker
} from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { indigo as primary } from '@material-ui/core/colors';

import { availableTimes } from '../../utils/constants';

import Modal from '../modal/modal.comp';

const myTheme = createMuiTheme({
  palette: {
    primary: primary
  }
});

const Input = () => {
  const [selectedStartDate, setStartDate] = useState(new Date());
  const [selectedEndDate, setEndDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPickupTime, setSelectedPickupTime] = useState('10:00');
  const [selectedDropoffTime, setSelectedDropoffTime] = useState('11:00');
  const [fromOpen, setFromOpen] = useState(false);
  const [untilOpen, setUntilOpen] = useState(false);

  const day = {
    start: selectedStartDate.getDate(),
    end: selectedEndDate.getDate()
  };
  const month = {
    start: selectedStartDate.getMonth() + 1,
    end: selectedEndDate.getMonth() + 1
  };
  const year = {
    start: selectedStartDate.getFullYear(),
    end: selectedStartDate.getFullYear()
  };

  const handleDropdown = (source, time) => {
    if (source === 'from') {
      setSelectedPickupTime(time);
      setFromOpen(false);
    } else {
      setSelectedDropoffTime(time);
      setUntilOpen(false);
    }
  };

  const handleDateClick = () => {
    setIsOpen(true);
    setModalOpen(true);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        className={styles.mainContainer}>
        {/* {!modalOpen && (
          <Modal> */}
            <div className={styles.calendarCont}>
              <DatePicker
                autoOk
                variant='inline'
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                label='Open me from button'
                format='MM/dd/yyyy'
                value={selectedStartDate}
                onChange={setStartDate}
              />
            </div>
          {/* </Modal>
        )} */}

        {/* <Modal> */}
          <div className={styles.calendarContEnd}>
            <DatePicker
              autoOk
              variant='inline'
              open={isOpenEnd}
              onOpen={() => setIsOpenEnd(true)}
              onClose={() => setIsOpenEnd(false)}
              label='Open me from button'
              format='MM/dd/yyyy'
              value={selectedEndDate}
              onChange={setEndDate}
            />
          </div>
        {/* </Modal> */}

        {/* <Calendar
          date={selectedEndDate}
          onChange={setEndDate}
          disablePast
          className={styles.calendar}
        /> */}

        <div className={styles.cont}>
          <div className={styles.unitCont}>
            <div className={styles.label}>
              <p>From</p>
            </div>
            <div className={styles.dateTimeCont}>
              <div className={styles.date} onClick={handleDateClick}>
                <p>{`${month.start}/${day.start}/${year.start}`}</p>
                <DateIcon />
              </div>
              <div className={styles.time}>
                <p>10:00</p>
                <TimeIcon />
              </div>
            </div>
          </div>

          <div className={styles.arrowCont}>
            <DoubleArrowIcon className={styles.arrow} />
          </div>

          <div className={styles.unitCont}>
            <div className={styles.label}>
              <p>Until</p>
            </div>
            <div className={styles.dateTimeCont}>
              <div className={styles.date} onClick={() => setIsOpenEnd(true)}>
                <p>{`${month.end}/${day.end}/${year.end}`}</p>
                <DateIcon />
              </div>
              <div className={styles.time}>
                <p>10:00</p>
                <TimeIcon />
              </div>
            </div>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default Input;
