import React from 'react'
import { Spacing } from '../';
import styles from './styles.module.scss'
import cn from 'clsx'

type Option ={
  label: string;
  value: string;
}

interface Props extends  React.SelectHTMLAttributes<HTMLSelectElement> {
  data: Option[],
  label?: string,
  value?: string,
  errorMessage?: React.ReactNode;
}

export const Select: React.FC<Props> = ({ data, onChange, onBlur, label, className, value, errorMessage, ...props }) => {
  return (
    <div
      className={cn(styles['container'], className)}
    >
    { label && (
      <div>
        <label
          className={styles.label}
        > { label } </label>
        <Spacing appearance="xx-small"/>
      </div>
    ) }
      <select
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultChecked={false}
        { ...props }
      >
        <option> Selecione seu personagem </option>
        { data.map(item => (
          <option key={item.value} value={item.value}>{ item.label }</option>
        )) }
      </select>
      { errorMessage ? <span className={styles.error}>{ errorMessage }</span> : null }
    </div>
  )
}

export default Select