import React from 'react'
import { render } from '@testing-library/react'
import { Form } from './Form'

describe('Form container', () => {
  test('Render Form container with its initial state', () => {
    const { getByTestId } = render(<Form />)
    expect(getByTestId('full-name')).toBeInTheDocument()
  })
})
