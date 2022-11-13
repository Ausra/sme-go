import { blue, neutral, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[100],
  button: {
    primaryColor: blue[100],
    primaryTextColor: neutral[100],
    secondaryColor: neutral[100],
    secondaryTextColor: blue[100],
    disabledColor: neutral[400],
  },
  step: {
    activeColor: blue[100],
    inactiveColor: neutral[600],
    disabledColor: neutral[400],
  },
  cardBackground: neutral[100],
  bodyBackgroundColor: neutral[200],
  primaryFont: primaryFont,
  textColor: neutral[700],
  disabledTextColor: neutral[400],
  input: {
    defaultBackgroundColor: neutral[100],
    borderColor: neutral[500],
    backgroundColor: neutral[300],
  },
  status: {
    errorColor: red[100],
  },
};
