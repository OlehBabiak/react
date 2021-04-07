import React, {createContext, useContext} from 'react'

const CounterContext = createContext()


export default function ContextProvider({children}) {
    const [counter, setCounter] = React.useState(0)

    const incCounter = () => {
        setCounter(counter +1)
    }

    const decCounter = () => {
        setCounter(counter -1)
    }

    return (
            <CounterContext.Provider value = {{
                counter,
                incCounter,
                decCounter
            }}>
                
                {children}
            </CounterContext.Provider>
    )
}