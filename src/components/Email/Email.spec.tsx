import React from 'react'
import { screen, render, fireEvent, waitFor, act } from '@testing-library/react'
import { Email } from './Email'

const nextStep = jest.fn()
const prevStep = jest.fn()
const handleTenantInputs = jest.fn()

describe('Render Email component with desired behaviors', () => {
  beforeEach(() => {
    render(<Email nextStep={nextStep} prevStep={prevStep} handleTenantInputs={handleTenantInputs} />)
  })
  test('Render Email component correctly in the documents', () => {
    expect(screen.getByTestId('email')).toBeInTheDocument()
  })

  test('Email component working as expected', async () => {
    const email = screen.getByTestId('email') as HTMLInputElement
    const nextButton = screen.getByTestId('next-button')

    act(() => {
      fireEvent.change(email, { target: { value: 'amdouni.hamza.hsn@gmail.com' } })
      fireEvent.click(nextButton)
    })
    waitFor(() => expect(email).toBeNull())
  })

  test('Prev Button working as expected', async () => {
    const email = screen.getByTestId('email') as HTMLInputElement
    const prevButton = screen.getByTestId('prev-button')
    act(() => {
      fireEvent.change(email, { target: { value: 'amdouni.hamza.hsn@gmail.com' } })
      fireEvent.click(prevButton)
    })
    waitFor(() => expect(email).toBeNull())
  })
})
