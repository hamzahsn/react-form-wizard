import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './FullName.scss'
import { ITenant, ITenantHandlers } from '@typings/'
import { LabelInput } from '@styles/LabelInput/LabelInput'
import { Button } from '@styles/Button/Button'
import { Wrapper } from '@styles/Wrapper/Wrapper'

export const FullName: React.FC<ITenant & ITenantHandlers> = ({ fullName, nextStep, handleTenantInputs }) => {
  const { register, errors } = useForm()

  return (
    <Wrapper>
      <LabelInput
        id="fullName"
        type="text"
        name="fullName"
        labelText="Full Name"
        placeholder="Provide a full name"
        data-testid="full-name"
        defaultValue={fullName}
        register={register({
          required: true,
          pattern: {
            value: /^[a-z]+$/i,
            message: 'Invalid name'
          }
        })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTenantInputs(event, 'fullName')}
      />
      {errors.fullName && (
        <p data-testid="name-error" className={styles.error}>
          {errors.fullName.message}
        </p>
      )}
      {fullName !== '' && (
        <Button className={styles.nextButton} type="button" data-testid="next-button" onClick={nextStep}>
          Go next
        </Button>
      )}
    </Wrapper>
  )
}
