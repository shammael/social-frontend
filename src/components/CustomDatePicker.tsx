import { FieldProps, useField } from 'formik';
import { useState } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Datepicker from 'tailwind-datepicker-react';
import { IOptions } from 'tailwind-datepicker-react/types/Options';

interface Props extends FieldProps, ReactDatePickerProps {}

const CustomDatePicker = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [field, meta, helpers] = useField('birthDate');

  const handleDateChange = (date: Date) => {
    helpers.setValue(date);
    helpers.setTouched(true);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const options: IOptions = {
    title: 'Select your Birthdate',
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date(),
    minDate: new Date('1950-01-01'),
    theme: {
      background: 'dark:bg-gray-800',
      todayBtn: 'bg-blue-400',
      clearBtn: '',
      icons: '',
      text: '',
      disabledText: '',
      input: 'text-slate-500',
      inputIcon: 'text-slate-500',
      selected: '',
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => (
        <span>
          <FaArrowLeft className="text-slate-400" size={12} />
        </span>
      ),
      next: () => (
        <span>
          <FaArrowRight className="text-slate-400" size={12} />
        </span>
      ),
    },
    datepickerClassNames: 'top-12',
    defaultDate: new Date(),
    language: 'en',
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleDateChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default CustomDatePicker;
