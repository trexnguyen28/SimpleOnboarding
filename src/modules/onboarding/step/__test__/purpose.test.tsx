import * as React from 'react';
import {fireEvent, render, screen, act} from '@testing-library/react-native';
import {PurposeStep} from '../PurposeStep';
//

describe('Purpose step suites', () => {
  test('Render correctly', () => {
    render(
      <PurposeStep
        id={'purpose'}
        isFinal={true}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    const submitBtn = screen.getByTestId('submitBtn');
    const submitText = screen.getByTestId('submitBtn-text');

    expect(submitBtn).toBeDisabled();
    expect(submitText).toHaveTextContent('Complete');
  });

  test('User can submit after choosing purpose', async () => {
    render(
      <PurposeStep
        id={'purpose'}
        isFinal={true}
        onFinish={() => {}}
        onNext={() => {}}
      />,
    );

    const moneyOption = screen.getByTestId('money');
    const submitBtn = screen.getByTestId('submitBtn');

    await act(() => {
      fireEvent.press(moneyOption);
    });

    expect(submitBtn).not.toBeDisabled();
  });
});
