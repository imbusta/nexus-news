import { useRef } from 'react'
import styles from './Search.module.css'

export default function Search({handleInput}) {
    const first = useRef('')
    return (
        <input ref={first} className={styles.input} placeholder='Search news' onChange={handleInput}></input>
    )
}