import { blue, neutral, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  button: {
    primaryColor: blue[100],
    primaryTextColor: neutral[100],
    secondaryColor: neutral[100],
    secondaryTextColor: blue[100],
  },
  primaryFont: primaryFont,
  status: {
    errorColor: red[100],
  },

  borderColor: neutral[500],
};
