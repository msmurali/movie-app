import React from 'react'
import './posterStyles.css'

const Poster = ({movie, onclick}) =>{

    const style = {
        backgroundImage : `url(${movie.bg})`
    }

    return(
        <div className='poster' onClick={onclick} style={style}></div>
    )
}

export default Poster