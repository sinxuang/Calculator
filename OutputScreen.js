import React from 'react'
import OutputScreenRow from './OutputScreeRow'

const OutputScreen = (props) => {
    return (
        <div className = "screen-row">
            <OutputScreenRow value = {props.question} />
            <OutputScreenRow value = {props.answer}/>
        </div>
    )
}

export default OutputScreen
