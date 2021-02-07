import React from 'react'
import styles from './Summary.scss'
import { Wrapper } from '@styles/Wrapper/Wrapper'
import { ITenant } from '@typings/'

export const Summary: React.FC<ITenant> = ({ fullName, email, phoneNumber, salary }) => {
  return (
    <Wrapper>
      <p>Summary</p>
      <div className={styles.summaryWrapper}>
        <div className={styles.summaryName}>
          <p data-testid="name-summary">name: </p>
          <p data-testid="email-summary">email: </p>
          <p data-testid="phone-summary">Phone number: </p>
          <p data-testid="salary-summary">salary: </p>
        </div>
        <div className={styles.summaryValue}>
          <p data-testid="name-summary-value"> {fullName}</p>
          <p data-testid="email-summary-value">{email}</p>
          <p data-testid="phone-summary-value">{phoneNumber}</p>
          <p data-testid="salary-summary-value">{salary}</p>
        </div>
      </div>
    </Wrapper>
  )
}
