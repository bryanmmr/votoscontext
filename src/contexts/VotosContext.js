import React, { createContext, useState, useContext } from 'react'

const VotoContext = createContext();

export function VotosContext ({children}){
    const [votos, setVotos] = useState({candidatos : [
        {id: 1,name : "candidato 1", votos : 0, show: true},
        {id: 2,name : "candidato 2", votos : 0, show: true},
        {id: 3,name : "candidato 3", votos : 0, show: true},
        {id: 4,name : "candidato 4", votos : 0, show: true}
    ]})
    const [percentage, setPercentage] = useState(false)
    const propsToPass = {
        votos,
        setVotos,
        percentage,
        setPercentage
    }
    return (
        <VotoContext.Provider value = { propsToPass }>
            {children}
        </VotoContext.Provider>
    )
}

export function useVoteState () {
    const context = useContext(VotoContext)

    if (context === undefined) {
        throw new Error("useVotoState must be used within a Voto Provider");
    }
    return context;
}

