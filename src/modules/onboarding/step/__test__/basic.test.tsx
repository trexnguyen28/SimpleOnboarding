import * as React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react-native';
//
import {BasicStep} from '../BasicStep';

describe('Basic step suites', () => {
  test('Render correctly', () => {
    render(
      <BasicStep
        id={'basic'}
        isFinal={false}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    expect(screen.getByTestId('fullName')).toBeOnTheScreen();
    expect(screen.getByTestId('idNumber')).toBeOnTheScreen();
    expect(screen.getByTestId('submitBtn')).toBeOnTheScreen();
  });

  test('User can input successfully with correct data', async () => {
    render(
      <BasicStep
        id={'basic'}
        isFinal={false}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    const fullName = screen.getByTestId('fullName');
    const fullNameError = screen.queryByTestId('fullNameError');
    const idNumber = screen.getByTestId('idNumber');
    const idNumberError = screen.queryByTestId('idNumberError');
    const submitBtn = screen.getByTestId('submitBtn');

    fireEvent.changeText(fullName, 'Nguyen Chau Thanh Thien');
    fireEvent.changeText(idNumber, '321586548');

    await act(() => {
      fireEvent.press(submitBtn);
    });

    expect(fullNameError).not.toBeOnTheScreen();
    expect(idNumberError).not.toBeOnTheScreen();
  });

  test('User should see error when input incorrect data', async () => {
    render(
      <BasicStep
        id={'basic'}
        isFinal={false}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    const idNumber = screen.getByTestId('idNumber');
    const submitBtn = screen.getByTestId('submitBtn');

    fireEvent.changeText(idNumber, '123');

    await act(() => {
      fireEvent.press(submitBtn);
    });

    const idNumberError = screen.getByTestId('idNumberError');

    expect(idNumberError).toBeOnTheScreen();
  });
});
