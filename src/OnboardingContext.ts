import {createContext} from 'react';
import {OnboardingModel, OnboardingContextPayload} from './OnboardingTypes';

export const OnboardingDefaultState: OnboardingModel = {
  basic: {fullName: '', idNumber: ''},
  additional: {email: '', phoneNumber: '', dateOfBirth: ''},
  purpose: [],
};

export const OnboardingContext = createContext<OnboardingContextPayload>({
  onboardData: OnboardingDefaultState,
  setOnboardData: () => {},
});

OnboardingContext.displayName = 'OnboardingContext';
