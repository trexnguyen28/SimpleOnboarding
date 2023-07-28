import {createContext} from 'react';
import {OnboardingContextPayload} from './types';
import {ONBOARD_DEFAULT_STATE} from './constants';

export const Context = createContext<OnboardingContextPayload>({
  onboardData: ONBOARD_DEFAULT_STATE,
  setOnboardData: () => {},
});

Context.displayName = 'Context';
