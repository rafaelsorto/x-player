import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

// Define a type for the slice state
interface PlayerState {
  status: 'idle' | 'loading'
  media: string
}

// Define the initial state using that type
const initialState: PlayerState = {
  status: 'loading',
  media: '',
}

export const counterSlice = createSlice({
  name: 'player',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    play: (state, action: PayloadAction<string>) => {
      state.media = action.payload
      state.status = 'loading'
    },
  },
})

export const { play } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPlayer = (state: RootState): PlayerState => state.player

export default counterSlice.reducer
