import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

const AllTheProviders = ({ children }) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
