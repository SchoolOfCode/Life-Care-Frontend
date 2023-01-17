import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: () => ({
      'html, body': {
        height: '100%',
        bg: "#F3F4F6",
      },
    }),
  },
})

export default theme