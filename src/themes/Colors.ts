const Palates = {
  Primary: '#2C2A8A',
  Secondary: '#EBF5FF',
  Red: '#D34646',
  Yellow: '#FFB830',
  Green: '#57C298',
  Black: '#000000',
  BG: {
    100: '#FFFFFF',
    200: '#F1F1F1',
    300: '#DADFE4',
    500: '#8594A0',
    700: '#475564',
    900: '#2A323A',
  },
};

export const Colors = {
  isDarkTheme: false,
  //
  CustomNavigation: {
    background: Palates.BG['100'],
    card: Palates.BG['100'],
    border: Palates.BG['300'],
    text: Palates.BG['500'],
    primary: Palates.Primary,
    notification: Palates.Red,
  },
  //
  Primary: Palates.Primary,
  Secondary: Palates.Secondary,
  Background: Palates.BG['100'],
  SubBackground: Palates.BG['300'],
  OverlayBackground: Palates.Black,
  OverlayContainerBackground: Palates.BG['100'],
  Border: {
    Dark: Palates.BG['300'],
    Light: Palates.BG['300'],
  },
  //
  Text: Palates.BG['900'],
  SubText: Palates.BG['500'],
  Link: {
    Text: Palates.Primary,
  },
  //
  Button: {
    Primary: Palates.Primary,
    Secondary: Palates.BG['100'],
    PrimaryText: Palates.BG['100'],
    SecondaryText: Palates.Primary,
    Border: Palates.Primary,
  },
  Status: {
    Error: Palates.Red,
    Success: Palates.Green,
    Warning: Palates.Yellow,
  },
  //
  Message: {
    Main: Palates.Secondary,
    Sub: Palates.BG['200'],
    Name: Palates.Primary,
    Text: Palates.BG['900'],
  },
  //
  Onboarding: {
    Main: Palates.BG['100'],
    Sub: Palates.BG['200'],
  },
  Shadow: {
    Background: Palates.Black,
  },
};
