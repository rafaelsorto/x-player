// theme.js
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const breakpoints = createBreakpoints({
  sm: '22em',
  md: '48em',
  lg: '64em',
  xl: '90em',
  '2xl': '96em',
})

const theme = extendTheme({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  breakpoints,
})

export default theme
