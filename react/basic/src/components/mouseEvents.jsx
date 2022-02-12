import React, { useState } from 'react';

import '../styles/mouseEvents.scss'

const defaultStyle = {
  backgroundColor: '#000',
}

const randomRGBColor = () => {
  return Math.floor(Math.random() * 256)
}

const MouseEvents = () => {
  const [style, setStyle] = useState(defaultStyle)
  const [intervalId, setIntervalId] = useState(0);
  const [pause, setPause] = useState(false);

  const randomStyles = () => {
    const r = randomRGBColor()
    const g = randomRGBColor()
    const b = randomRGBColor()

    setStyle({
      backgroundColor: `rgb(${r},${g},${b})`,
    })
  }

  const initRandomColor = () => {
    setIntervalId(setInterval(randomStyles, 500))
    setPause(false)
  }

  const stopRandomColor = () => {
    clearInterval(intervalId)
    setStyle(defaultStyle)
    setPause(false)
  }

  const toggleRandomColor = () => {
    if (!pause) {
      clearInterval(intervalId)
    } else {
      initRandomColor()
    }
    setPause(!pause)
  }

  return (
    <div className="container">
      <div
        className="box"
        style={style}
        onMouseEnter={initRandomColor}
        onMouseLeave={stopRandomColor}
        onDoubleClick={toggleRandomColor}
      ></div>
    </div>
  );
}

export default MouseEvents;
