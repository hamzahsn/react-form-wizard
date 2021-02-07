import React from 'react'
import { screen, render, fireEvent, waitFor, act } from '@testing-library/react'
import { FullName } from './FullName'

const nextStep = jest.fn()
const prevStep = jest.fn()
const handleTenantInputs = jest.fn()

describe('Render Full name component with desired behaviors', () => {
  beforeEach(() => {
    render(<FullName nextStep={nextStep} prevStep={prevStep} handleTenantInputs={handleTenantInputs} />)
  })
  test('Render name input correctly in the document', () => {
    expect(screen.getByTestId('full-name')).toBeInTheDocument()
  })

  test('Full name component working as expected', async () => {
    const fullName = screen.getByTestId('full-name') as HTMLInputElement
    const nextButton = screen.getByTestId('next-button')

    act(() => {
      fireEvent.change(fullName, { target: { value: 'hamza' } })
      fireEvent.click(nextButton)
    })

    waitFor(() => expect(fullName).toBeNull())
  })
})
