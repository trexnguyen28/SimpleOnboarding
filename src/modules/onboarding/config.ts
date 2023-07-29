import {StepViewConfig, StepConfig} from './types';
import {BasicStep, AdditionalStep, PurposeStep} from './step';

// Change this in order to change the step order
// In fact, this one should to be loaded from BE
export const OnboardStepConfig: Array<StepConfig> = [
  {id: 'basic', title: 'Basic'},
  {id: 'purpose', title: 'Purpose'},
  {id: 'additional', title: 'Additional'},
];

// Normally, we keep this on in app environment
// Make this for better reusable in the future
export const OnboardViewConfig: Array<StepViewConfig> = [
  {id: 'basic', view: BasicStep},
  {id: 'additional', view: AdditionalStep},
  {id: 'purpose', view: PurposeStep},
];
