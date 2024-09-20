import Configs from './Configs'
import styles from './Header.module.css'
import Title from './Title'

export default function Header({handleInput}){
    return(
        <div className={styles.header}>
            <Title />
            <Configs handleInput={handleInput}/>
        </div>
    )
}