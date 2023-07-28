export interface BasicInfo {
  fullName: string;
  idNumber: string;
}

export interface AdditionalInfo {
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

export interface Option {
  id: string;
  label: string;
}

export type PurposeInfo = Array<Option>;

export type StepModel = BasicInfo | AdditionalInfo | PurposeInfo;

export type StepId = 'basic' | 'additional' | 'purpose';

export type OnboardingModel = {
  [key in StepId]?: StepModel;
};

export interface OnboardingContextPayload {
  onboardData: OnboardingModel;
  setOnboardData: (id: StepId, data: StepModel) => void;
}

export interface StepViewProps {
  id: StepId;
  isFinal: boolean;
  isActive: boolean;
  onNext: () => void;
  onFinish: () => void;
}
