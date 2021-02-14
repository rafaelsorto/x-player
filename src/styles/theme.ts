// theme.js
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '64em',
  xl: '90em',
  '2xl': '96em',
})

const theme = extendTheme({
  breakpoints,
})

export default theme
