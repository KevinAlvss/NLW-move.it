import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button
                          type="button"
                          className={styles.challengeFailedButton}
                        >
                        Falhei</button>
                        <button
                          type="button"
                          className={styles.challengeSuceededButton}
                        >
                        Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="levelup"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
            
        </div>
    )
}