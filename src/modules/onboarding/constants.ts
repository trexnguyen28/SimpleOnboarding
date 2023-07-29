import {OnboardingModel, Option} from './types';

export const ONBOARD_DEFAULT_STATE: OnboardingModel = {
  basic: {fullName: '', idNumber: ''},
  additional: {email: '', phoneNumber: '', dateOfBirth: ''},
  purpose: [],
};

export const ONBOARD_PURPOSE_LIST: Array<Option> = [
  {id: 'money', label: 'Money transfer'},
  {id: 'pay', label: 'Payment'},
  {id: 'bill', label: 'Bill payment'},
  {id: 'loan', label: 'Loan'},
  {id: 'investment', label: 'Investment'},
  {id: 'saving', label: 'Saving'},
];

export const VN_PHONE_PATTERN = /^0(\d{9})$/;

export const EMAIL_PATTERN =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+([\.-]?[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const VN_ID_REGEX = /^(\d{9}|\d{12})$/;

export const AGE_LIMITATION = 18;
