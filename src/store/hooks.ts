import {
  TypedUseSelectorHook,
  useDispatch as useRRDispatch,
  useSelector as useRRSelector,
} from 'react-redux'
import { RootState, AppDispatch } from './'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useRRDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useRRSelector
