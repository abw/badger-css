import React, { useState, useRef } from 'react'
import ControlPoint from '../bezier/ControlPoint.jsx'
import { range as numberRange } from '@abw/badger-utils'
import { clamper } from '../utils/clamp.js'
import { bezier, bezierInverse } from '../utils/curves.js'

const gridLines = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const tPoints = numberRange(0, 100)

const CurveEditor = ({
  min, setMin,
  max, setMax,
  control1, setControl1,
  control2, setControl2,
  range=100
}) => {
  const factor = range / 100
  const svgRef = useRef(null)
  // console.log(`min: ${min} max; ${max}`)
  // console.log(`start: ${start.y} end: ${end.y}`);
  const [stop, setStop] = useState(50)
  const stopTime = bezierInverse(stop, 0, control1.x, control2.x, 100)
  const stopY = bezier(stopTime, min, control1.y, control2.y, max)
  // console.log(`stopTime:${stopTime} from ${start.y} via ${control1.y} and ${control2.y} to ${end.y} is ${stopY}`);

  const clampRange = clamper(0, range)

  const moveStart = newStart => {
    setMin(Math.round(newStart.y * factor))
  }
  const moveEnd = newEnd => {
    setMax(Math.round(newEnd.y * factor))
  }
  const moveControl1 = newControl => {
    setControl1({
      x: Math.round(newControl.x),
      y: Math.round(newControl.y * factor)
    })
  }
  const moveControl2 = newControl => {
    setControl2({
      x: Math.round(newControl.x),
      y: Math.round(newControl.y * factor)
    })
  }

  return (
    <div className="chart">
      <svg viewBox="-5 -5 110 110" className="chart">
        <g transform="matrix(1 0 0 -1 0 100)" ref={svgRef}>
          <g className="grid">
            { gridLines.map(
              n => <line key={n} x1={n} y1="0" x2={n} y2="100"/>
            )}
            { gridLines.map(
              n => <line key={n} x1="0" y1={n} x2="100" y2={n}/>
            )}
          </g>
          <rect x="0" y="0" width="100" height="100" className="border"/>
          <line
            x1="0" y1={min / factor} x2={control1.x} y2={control1.y / factor}
            className="control-line"
          />
          <line
            x1="100" y1={max / factor} x2={control2.x} y2={control2.y / factor}
            className="control-line"
          />
          <g className="line">
            <polyline className="line" points={
              tPoints.map(
                x => [
                  bezier(x/100, 0, control1.x, control2.x, 100),
                  bezier(x/100, min / factor, control1.y / factor, control2.y / factor, max / factor)
                ].join(',')
              ).join(' ')
            }/>
          </g>
          <ControlPoint
            coordinates={{ x: 0, y: min / factor }}
            setCoordinates={moveStart}
            maxX={0} radius={3} className="start-point"
            svgRef={svgRef}
          />
          <ControlPoint
            coordinates={{ x: 100, y: max / factor }}
            setCoordinates={moveEnd}
            minX={100} radius={3} className="end-point"
            svgRef={svgRef}
          />
          <ControlPoint
            coordinates={{ x: control1.x, y: control1.y / factor }}
            setCoordinates={moveControl1}
            svgRef={svgRef}
          />
          <ControlPoint
            coordinates={{ x: control2.x, y: control2.y / factor }}
            setCoordinates={moveControl2}
            svgRef={svgRef}
          />
          <line
            x1={stop} y1={0} x2={stop} y2={100}
            className="stop-line"
          />
          <line
            x1="0" y1={stopY / factor} x2="100" y2={stopY / factor}
            className="stop-line"
          />
        </g>
      </svg>
      <div className="grid-2 gap-2">
        <div className="field">
          <label>Min</label>
          <input
            type="number"
            value={min}
            onChange={e => setMin(clampRange(e.target.value))}
          />
        </div>
        <div className="field">
          <label>Max</label>
          <input
            type="number"
            value={max}
            onChange={e => setMax(clampRange(e.target.value))}
          />
        </div>
      </div>
      <div className="grid-4 gap-2">
        <div className="field">
          <label>X</label>
          <input
            type="number"
            value={control1.x}
            onChange={e => setControl1({ x: clampRange(e.target.value), y: control1.y })}
          />
        </div>
        <div className="field">
          <label>Y</label>
          <input
            type="number"
            value={control1.y}
            onChange={e => setControl1({ x: control1.x, y: clampRange(e.target.value) })}
          />
        </div>
        <div className="field">
          <label>X</label>
          <input
            type="number"
            value={control2.x}
            onChange={e => setControl2({ x: clampRange(e.target.value), y: control2.y })}
          />
        </div>
        <div className="field">
          <label>Y</label>
          <input
            type="number"
            value={control2.y}
            onChange={e => setControl2({ x: control2.x, y: clampRange(e.target.value) })}
          />
        </div>
      </div>
      <div className="field">
        <label>Stop: {stop} = {Math.round(stopY)}</label>
        <input
          type="range"
          min="0" max="100" step="1"
          value={stop} onChange={e => setStop(e.target.value)}
        />
      </div>
    </div>
  )
}

export default CurveEditor