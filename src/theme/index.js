import { extendTheme } from "@chakra-ui/react";
import { textStyles } from "./text-styles";
import {buttonStyles} from "./button-styles"

const theme = extendTheme({
  textStyles,
  components: {
    Button: {
      variants: buttonStyles,
    },
  },
  fonts: {
    heading: "'Work Sans', sans-serif", // usado em <Heading>
    body: "'Work Sans', sans-serif",    // usado em <Text>, <Box>, etc
  },
});

export default theme;