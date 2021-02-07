import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './Email.scss'
import { ITenant, ITenantHandlers } from '@typings/'
import { LabelInput } from '@styles/LabelInput/LabelInput'
import { Button } from '@styles/Button/Button'
import { Wrapper } from '@styles/Wrapper/Wrapper'

export const Email: React.FC<ITenant & ITenantHandlers> = ({ email, nextStep, prevStep, handleTenantInputs }) => {
  const { register, errors } = useForm()
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <Wrapper>
      <LabelInput
        id="email"
        type="text"
        name="Email"
        labelText="Email: "
        placeholder="Provide an email"
        data-testid="email"
        defaultValue={email}
        register={register({
          required: true,
          pattern: {
            value: emailRegex,
            message: 'invalid email'
          }
        })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleTenantInputs(event, 'email')}
      />
      {errors.email && (
        <p data-testid="email-error" className={styles.error}>
          {errors.email.message}
        </p>
      )}
      <div className={styles.navigationButtons}>
        <Button data-testid="prev-button" onClick={prevStep}>
          Go back
        </Button>
        {email !== '' && (
          <Button className={styles.nextButton} data-testid="next-button" onClick={nextStep}>
            Go next
          </Button>
        )}
      </div>
    </Wrapper>
  )
}
