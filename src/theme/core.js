const layouts = {
  paddingBase: 10,
};

const colors = {
  red: '#D51F2B',
  white: '#FFFFFF',
  gray: '#CCCCCC',
  black: '#000000',
};

const theme = {
  ...layouts,
  primary: colors.red,
  dark: colors.black,
  white: colors.white,
  // Navigation
  activeTintColor: colors.white,
  inactiveTintColor: colors.gray,
  tabBarBackgroundColor: colors.red,

  // Font size
  fontSizeBase: 14,
  fontSizeSmall: 12,
  fontSizeMedium: 16,

  // Font weight
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightBold: '500',
};

export default theme;
