import React from "react"
import { Typewriter } from 'react-simple-typewriter';


const AutoWriter = () => {
    return (
        <span 
          style={{
              color: "#64ffda",
              fontWeight: 'bold' 
          }}>

            <Typewriter
              words={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React'
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
        </span>
    )
}

export default AutoWriter