import styles from './SourceLogo.module.css'

export default function SourceLogo({ display, logo, name }) {
    return (
        <div className={styles.container}>
            <img src={logo} alt={`${name} logo`} />
        </div>
    )
}