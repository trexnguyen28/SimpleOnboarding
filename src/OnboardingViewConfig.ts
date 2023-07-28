import {StepViewConfig} from './OnboardingTypes';
//
import {BasicStep} from './BasicStep';
import {PurposeStep} from './PurposeStep';
import {AdditionalStep} from './AdditionalStep';

export const OnboardingViewConfig: Array<StepViewConfig> = [
  {id: 'basic', view: BasicStep},
  {id: 'additional', view: AdditionalStep},
  {id: 'purpose', view: PurposeStep},
];
