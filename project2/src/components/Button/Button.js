import React from 'react'
import styles from './Button.module.css'

export const Button = ({text, icon, isOutline}) => {
  return (
    <button className={isOutline?styles.btn_outline:styles.btn_design}>{icon}{text}</button>
  )
}
