import {StepViewConfig, StepConfig} from './types';
import {BasicStep, AdditionalStep, PurposeStep} from './step';

export const OnboardStepConfig: Array<StepConfig> = [
  {id: 'basic', title: 'Basic'},
  {id: 'additional', title: 'Additional'},
  {id: 'purpose', title: 'Purpose'},
];

export const OnboardViewConfig: Array<StepViewConfig> = [
  {id: 'basic', view: BasicStep},
  {id: 'additional', view: AdditionalStep},
  {id: 'purpose', view: PurposeStep},
];
