import React from 'react';

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

export interface OnboardingProps {
  steps: Array<StepConfig>;
  views: Array<StepViewConfig>;
}

export interface StepViewProps {
  id: StepId;
  isFinal: boolean;
  onNext: () => void;
  onFinish: () => void;
}

export interface StepConfig {
  id: StepId;
  title: string;
}

export interface StepViewConfig {
  id: StepId;
  view: React.FC<StepViewProps>;
}
