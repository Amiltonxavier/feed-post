import React from 'react'
import styles from "./index.module.css"
import logo from "../../assets/Ignite simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
        <img src={logo} alt="logotipo do ignite" />
        <strong>Ignite</strong>
    </header>
  )
}
