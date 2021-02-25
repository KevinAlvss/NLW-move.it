import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, addCompletedChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSuceeded() {
        addCompletedChallenge()
        resetCountdown()
    }

    function handleFailedChallenge() {
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                          type="button"
                          className={styles.challengeFailedButton}
                          onClick={handleFailedChallenge}
                        >
                        Falhei</button>
                        <button
                          type="button"
                          className={styles.challengeSuceededButton}
                          onClick={handleChallengeSuceeded}
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