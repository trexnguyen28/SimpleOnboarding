import * as React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react-native';
//
import {AdditionalStep} from '../AdditionalStep';

describe('Additional step suites', () => {
  test('Render correctly', () => {
    render(
      <AdditionalStep
        id={'additional'}
        isFinal={false}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    expect(screen.getByTestId('email')).toBeOnTheScreen();
    expect(screen.getByTestId('phoneNumber')).toBeOnTheScreen();
    expect(screen.getByTestId('dateOfBirth')).toBeOnTheScreen();
    expect(screen.getByTestId('submitBtn')).toBeOnTheScreen();
  });

  test('User can input successfully with correct data', async () => {
    render(
      <AdditionalStep
        id={'basic'}
        isFinal={false}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    const email = screen.getByTestId('email');
    const emailError = screen.queryByTestId('emailError');
    const phoneNumber = screen.getByTestId('phoneNumber');
    const phoneNumberError = screen.queryByTestId('phoneNumberError');
    const submitBtn = screen.getByTestId('submitBtn');
    const dob = screen.getByTestId('dateOfBirth');
    const dobError = screen.queryByTestId('dateOfBirthError');

    fireEvent.changeText(email, 'thiensmail96@gmail.com');
    fireEvent.changeText(phoneNumber, '0397634707');
    fireEvent.changeText(dob, 'Sat 29 Jul 2000');

    await act(() => {
      fireEvent.press(submitBtn);
    });

    expect(emailError).not.toBeOnTheScreen();
    expect(phoneNumberError).not.toBeOnTheScreen();
    expect(dobError).not.toBeOnTheScreen();
  });

  test('User should see error when input incorrect data', async () => {
    render(
      <AdditionalStep
        id={'basic'}
        isFinal={false}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    const email = screen.getByTestId('email');
    const phoneNumber = screen.getByTestId('phoneNumber');
    const dob = screen.getByTestId('dateOfBirth');
    const submitBtn = screen.getByTestId('submitBtn');

    fireEvent.changeText(email, 'thiensmail96gmail.com');
    fireEvent.changeText(phoneNumber, '039763470');
    fireEvent.changeText(dob, 'Sat 29 Jul 2012');

    await act(() => {
      fireEvent.press(submitBtn);
    });

    const emailError = screen.getByTestId('emailError');
    const phoneNumberError = screen.getByTestId('phoneNumberError');
    const dobError = screen.getByTestId('dateOfBirthError');

    expect(emailError).toBeOnTheScreen();
    expect(phoneNumberError).toBeOnTheScreen();
    expect(dobError).toBeOnTheScreen();
  });
});
