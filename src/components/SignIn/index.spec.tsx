import React from 'react'
import { render } from 'test/testUtils'
import { SignIn } from './'

describe('SignIn', () => {
  it('renders SignIn component', () => {
    const { getByTestId } = render(
      <SignIn
        onSubmit={() => {
          return
        }}
      />,
      {}
    )
    expect(getByTestId('sign-in')).toBeDefined()
  })
})
