import React from 'react'
import { screen, render } from '@testing-library/react'
import { Summary } from './Summary'

const summary = {
  fullName: 'hamza',
  email: 'amdouni.hamza.hsn@gmail.com',
  phoneNumber: +4912345678,
  salary: '2000-3000'
}

describe('Render Summary component with desired behaviors', () => {
  beforeEach(() => {
    render(<Summary {...summary} />)
  })
  test('Render elements correctly in the documents', () => {
    expect(screen.getByTestId('name-summary')).toBeInTheDocument()
    expect(screen.getByTestId('email-summary')).toBeInTheDocument()
    expect(screen.getByTestId('phone-summary')).toBeInTheDocument()
    expect(screen.getByTestId('salary-summary')).toBeInTheDocument()

    expect(screen.getByTestId('name-summary-value')).toBeInTheDocument()
    expect(screen.getByTestId('email-summary-value')).toBeInTheDocument()
    expect(screen.getByTestId('phone-summary-value')).toBeInTheDocument()
    expect(screen.getByTestId('salary-summary-value')).toBeInTheDocument()
  })
})
