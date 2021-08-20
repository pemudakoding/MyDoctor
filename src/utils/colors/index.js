const mainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  gray1: '#7D8797',
  gray2: '#E1E1E1',
};
const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.gray2,
};

export {colors};
