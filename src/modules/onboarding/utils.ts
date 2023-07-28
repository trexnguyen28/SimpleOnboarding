import {StepConfig, StepViewConfig} from './types';

export const findStepConfigIndexById = (
  stepId: string,
  steps: Array<StepConfig>,
) => {
  return steps.findIndex(step => step.id === stepId);
};

export const findViewConfigById = (
  stepId: string,
  steps: Array<StepViewConfig>,
) => {
  return steps.find(step => step.id === stepId);
};
