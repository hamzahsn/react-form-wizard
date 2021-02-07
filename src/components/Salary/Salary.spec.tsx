import React from 'react'
import { screen, render, fireEvent, act, waitFor } from '@testing-library/react'
import { Salary } from './Salary'

const nextStep = jest.fn()
const prevStep = jest.fn()
const handleTenantInputs = jest.fn()

describe('Render Salary component with desired behaviors', () => {
  beforeEach(() => {
    render(<Salary nextStep={nextStep} prevStep={prevStep} handleTenantInputs={handleTenantInputs} />)
  })
  test('Render elements correctly in the documents', () => {
    expect(screen.getByTestId('firstRange')).toBeInTheDocument()
    expect(screen.getByTestId('secondRange')).toBeInTheDocument()
    expect(screen.getByTestId('thirdRange')).toBeInTheDocument()
    expect(screen.getByTestId('fourthRange')).toBeInTheDocument()
    expect(screen.getByTestId('fifthRange')).toBeInTheDocument()

    expect(screen.getByTestId('next-button')).toBeInTheDocument()
    expect(screen.getByTestId('next-button')).toBeInTheDocument()
  })

  test('Radio buttons working as expected', () => {
    const firstRange = screen.getByTestId('firstRange') as HTMLInputElement
    const secondRange = screen.getByTestId('secondRange') as HTMLInputElement
    const thirdRange = screen.getByTestId('thirdRange') as HTMLInputElement
    const fourthRange = screen.getByTestId('fourthRange') as HTMLInputElement

    fireEvent.change(firstRange, { target: { value: '0 - 1000' } })
    fireEvent.change(secondRange, { target: { value: '1000 - 2000' } })
    fireEvent.change(thirdRange, { target: { value: '2000 - 3000' } })
    fireEvent.change(fourthRange, { target: { value: '3000 - 4000' } })

    expect(firstRange.value).toBe('0 - 1000')
    expect(secondRange.value).toBe('1000 - 2000')
    expect(thirdRange.value).toBe('2000 - 3000')
    expect(fourthRange.value).toBe('3000 - 4000')
  })

  test('Prev Button working as expected', async () => {
    const firstRange = screen.getByTestId('firstRange') as HTMLInputElement
    const prevButton = screen.getByTestId('prev-button')
    act(() => {
      fireEvent.click(prevButton)
    })
    waitFor(() => expect(firstRange).toBeNull())
  })

  test('Next Button working as expected', async () => {
    const firstRange = screen.getByTestId('firstRange') as HTMLInputElement
    const nextButton = screen.getByTestId('next-button')
    act(() => {
      fireEvent.click(nextButton)
    })
    waitFor(() => expect(firstRange).toBeNull())
  })
})
