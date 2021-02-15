import React from 'react'
import { render, RenderResult } from '@testing-library/react'

const AllTheProviders = ({ children }) => {
  return <>{children}</>
}

const customRender = (ui, options): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
