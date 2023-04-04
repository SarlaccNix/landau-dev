import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    title: {
      text: "#FFDE06",
      background: "#000000",
    },
    button: {
      text: "",
      background: "",
    },
  },
});

export const themeDictionary = {
  title: "title",
  background: "background",
};

export default theme;
