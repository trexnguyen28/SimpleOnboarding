import {Option, StepConfig} from './OnboardingTypes';

export const OnboardingPurposeConfig: Array<Option> = [
  {id: 'money', label: 'Money transfer'},
  {id: 'pay', label: 'Payment'},
  {id: 'bill', label: 'Bill payment'},
  {id: 'loan', label: 'Loan'},
  {id: 'investment', label: 'Investment'},
  {id: 'saving', label: 'Saving'},
];

export const OnboardingStepConfig: Array<StepConfig> = [
  {id: 'basic', title: 'Basic'},
  {id: 'additional', title: 'Additional'},
  {id: 'purpose', title: 'Purpose'},
];
