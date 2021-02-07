import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './PhoneNumber.scss'
import { ITenant, ITenantHandlers } from '@typings/'
import { LabelInput } from '@styles/LabelInput/LabelInput'
import { Button } from '@styles/Button/Button'
import { Wrapper } from '@styles/Wrapper/Wrapper'

export const PhoneNumber: React.FC<ITenant & ITenantHandlers> = ({
  phoneNumber,
  nextStep,
  prevStep,
  handleTenantInputs
}) => {
  const { register, errors } = useForm()
  const phoneRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g

  return (
    <Wrapper>
      <LabelInput
        id="phoneNumber"
        type="tel"
        name="phoneNumber"
        labelText="Phone number"
        placeholder="Provide a phone number"
        data-testid="phone-number"
        defaultValue={phoneNumber}
        register={register({
          required: true,
          pattern: {
            value: phoneRegex,
            message: 'invalid Phone number'
          }
        })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTenantInputs(event, 'fullName')}
        required
      />
      {errors.phoneNumber && (
        <p data-testid="phone-error" className={styles.error}>
          {errors.phoneNumber.message}
        </p>
      )}
      <div className={styles.navigationButtons}>
        <Button data-testid="prev-button" onClick={prevStep}>
          Go back
        </Button>
        <Button className={styles.nextButton} data-testid="next-button" onClick={nextStep}>
          Go next
        </Button>
      </div>
    </Wrapper>
  )
}
