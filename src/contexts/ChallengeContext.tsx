import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json'

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    addCompletedChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData)


export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
  
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2)

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const random = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[random];
        setActiveChallenge(challenge) 
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function addCompletedChallenge(){
        setChallengesCompleted(challengesCompleted + 1);
        setActiveChallenge(null)
    }

    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience,
            experienceToNextLevel,
            challengesCompleted, 
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            addCompletedChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}