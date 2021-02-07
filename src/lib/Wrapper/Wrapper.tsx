import React from 'react'
import styles from './Wrapper.scss'
import cs from 'classnames'

export interface IBorderedBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Wrapper: React.FC<IBorderedBoxProps> = ({ children, title, ...divProps }) => {
  const [isShow, setIsShow] = React.useState(true)

  React.useEffect(() => {
    let timed: ReturnType<typeof setTimeout>
    timed = setTimeout(() => setIsShow(true), 500)
    return () => clearTimeout(timed)
  }, [])

  return (
    <>
      {isShow && (
        <div className={cs(styles.baseWrapper, styles.animationIn)} {...divProps}>
          {title && <h1>{title}</h1>}
          {children}
        </div>
      )}
    </>
  )
}
