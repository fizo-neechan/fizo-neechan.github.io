import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className="progress-container">
        <div className="label">{props.skillname}</div>
        <div className="progress-bar">
            <div className="progress-label">{props.percentage}</div>
            <div className="bar-container">
                <div className="inner-bar" style={{width: props.percentage}}></div>
            </div>
        </div>
    </div>
  )
}

export default ProgressBar
