import React from 'react'
import styles from './ProgressBar.scss'

interface IProgressBar {
  percentage: number
}

export const ProgressBar: React.FC<IProgressBar> = ({ percentage }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div style={{ width: `${percentage}%` }} className={styles.progressBar} />
    </div>
  )
}
