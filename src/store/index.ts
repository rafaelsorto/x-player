import { useMemo } from 'react'
import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './features/player'

// We need to have a variable that we are using to differentiate between SSR, SSG, and client
let store

const initStore = (preloadedState) =>
  configureStore({
    reducer: {
      player: playerReducer,
    },
    preloadedState,
  })

export const initializeStore = (preloadedState?: any): any => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any): any {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
