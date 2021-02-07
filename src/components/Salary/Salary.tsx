import React from 'react'
import styles from './Salary.scss'
import { ITenant, ITenantHandlers } from '@typings/'
import { Button } from '@styles/Button/Button'
import { Wrapper } from '@styles/Wrapper/Wrapper'

export const Salary: React.FC<ITenant & ITenantHandlers> = ({ salary, nextStep, prevStep, handleTenantInputs }) => {
  const salaryRange = [
    {
      salary: {
        from: 0,
        to: 1000,
        name: 'firstRange'
      }
    },
    {
      salary: {
        from: 1000,
        to: 2000,
        name: 'secondRange'
      }
    },
    {
      salary: {
        from: 2000,
        to: 3000,
        name: 'thirdRange'
      }
    },
    {
      salary: {
        from: 3000,
        to: 4000,
        name: 'fourthRange'
      }
    },
    {
      salary: {
        from: 'Mehr als ',
        to: 4000,
        name: 'fifthRange'
      }
    }
  ]

  return (
    <Wrapper>
      <div className={styles.salaryValueContainer}>
        {salaryRange.map((value, index) => {
          return (
            // In a real world scenario I don't put the key as index of the array due to many known reasons but instead I use smth like uuid or nanoid, but for now I just sticked with it
            <div className={styles.radioButton} key={index}>
              <input
                name="salary"
                type="radio"
                id={value.salary.name}
                value={`${value.salary.from}-${value.salary.to}`}
                onChange={event => handleTenantInputs(event, 'salary')}
                data-testid={`${value.salary.name}`}
              />
              <label className={styles.radioLabel} htmlFor={value.salary.name}>
                {value.salary.from} - {value.salary.to}
              </label>
            </div>
          )
        })}
      </div>
      <div className={styles.navigationButtons}>
        <Button data-testid="prev-button" onClick={prevStep}>
          Go back
        </Button>
        {salary !== '' && (
          <Button className={styles.nextButton} data-testid="next-button" type="submit" onClick={nextStep}>
            Go next
          </Button>
        )}
      </div>
    </Wrapper>
  )
}
