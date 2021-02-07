import React from 'react'
import { screen, render, fireEvent, waitFor, act } from '@testing-library/react'
import { PhoneNumber } from './PhoneNumber'

const nextStep = jest.fn()
const prevStep = jest.fn()
const handleTenantInputs = jest.fn()

describe('Render Phone number component with desired behaviors', () => {
  beforeEach(() => {
    render(<PhoneNumber nextStep={nextStep} prevStep={prevStep} handleTenantInputs={handleTenantInputs} />)
  })
  test('Render phone input correctly in the documents', () => {
    expect(screen.getByTestId('phone-number')).toBeInTheDocument()
  })

  test('Phone number component working as expected', async () => {
    const phoneNumber = screen.getByTestId('phone-number') as HTMLInputElement
    const nextButton = screen.getByTestId('next-button')

    act(() => {
      fireEvent.change(phoneNumber, { target: { value: 492345678 } })
      fireEvent.click(nextButton)
    })

    waitFor(() => expect(phoneNumber).toBeNull())
  })

  test('Prev Button working as expected', async () => {
    const phoneNumber = screen.getByTestId('phone-number') as HTMLInputElement
    const prevButton = screen.getByTestId('prev-button')
    act(() => {
      fireEvent.change(phoneNumber, { target: { value: 492345678 } })
      fireEvent.click(prevButton)
    })
    waitFor(() => expect(phoneNumber).toBeNull())
  })
})
