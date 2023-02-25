import { useState } from 'react'

const [ isVisible, setIsVisible ] = useState( true )

return(
    <div>
        <h1
        style={{ display: isVisible ? "" : ""}}
        >
            Bombillo
        </h1>
        <button onClick={ () => setIsVisible( !isVisible)}>
        OFF / ON
        </button>
    </div>
)