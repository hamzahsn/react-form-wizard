import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ITenant } from '@typings/'
import { Summary, Salary, PhoneNumber, Email, FullName } from '@components/index'
import { ProgressBar } from '@styles/ProgressBar/ProgressBar'
import styles from './Form.scss'

export function Form() {
  const [step, setStep] = useState(1)
  const [progressBarStatus, setProgressBarStatus] = useState(0)
  const [formValues, setFormValues] = useState<ITenant>({
    fullName: '',
    email: '',
    phoneNumber: 0,
    salary: ''
  })
  const { handleSubmit } = useForm()

  const nextStep = () => {
    setStep(step => step + 1)
    setProgressBarStatus(progressBarStatus => progressBarStatus + 25)
  }

  const prevStep = () => {
    setStep(step => step - 1)
    setProgressBarStatus(progressBarStatus => progressBarStatus - 25)
  }

  const handleTenantInputs = (event: React.ChangeEvent<HTMLInputElement>, field: keyof ITenant) => {
    setFormValues({
      ...formValues,
      [field]: event.target.value
    })
  }

  const handleSubmitForm = (data: any) => {
    console.log(data)
  }

  const renderFormElements = () => {
    switch (step) {
      case 1:
        return (
          <FullName
            fullName={formValues.fullName}
            nextStep={nextStep}
            prevStep={prevStep}
            handleTenantInputs={handleTenantInputs}
          />
        )
      case 2:
        return (
          <Email
            email={formValues.email}
            nextStep={nextStep}
            prevStep={prevStep}
            handleTenantInputs={handleTenantInputs}
          />
        )
      case 3:
        return (
          <PhoneNumber
            phoneNumber={formValues.phoneNumber}
            nextStep={nextStep}
            prevStep={prevStep}
            handleTenantInputs={handleTenantInputs}
          />
        )
      case 4:
        return (
          <Salary
            salary={formValues.salary}
            nextStep={nextStep}
            prevStep={prevStep}
            handleTenantInputs={handleTenantInputs}
          />
        )
      case 5:
        return <Summary {...formValues} />
      default:
        return (
          <FullName
            fullName={formValues.fullName}
            nextStep={nextStep}
            prevStep={prevStep}
            handleTenantInputs={handleTenantInputs}
          />
        )
    }
  }

  return (
    <div className={styles.formContainer}>
      <ProgressBar percentage={progressBarStatus} />
      <form onSubmit={handleSubmit(handleSubmitForm)}>{renderFormElements()}</form>
    </div>
  )
}
