import React from 'react'
import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Structure: React.FC<Props> = (props) => {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        { props.children }
      </main>
    </div>
  )
}

export default Structure
