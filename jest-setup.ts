// Import Jest Native matchers
import '@testing-library/jest-native/extend-expect';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
