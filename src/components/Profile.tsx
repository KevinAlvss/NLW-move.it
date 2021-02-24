import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/KevinAlvss.png" alt="Kevin Alves" />
            <div>
                <strong>Kevin Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 100
                </p>
            </div>
        </div>
    )
}