import React from 'react'
import RangeSelect from './control/RangeSelect.jsx'
import StopSelect from './control/StopSelect.jsx'
import SpacingSelect from './control/SpacingSelect.jsx'
import SizeSelect from './control/SizeSelect.jsx'
import BorderSelect from './control/BorderSelect.jsx'
import CheckOption from './control/CheckOption.jsx'

const Controls = ({options, setOption, toggleOption}) =>
  <div className="grid gap-4">
    <RangeSelect
      range={options.range}
      setRange={setOption('range')}
    />
    <StopSelect
      title="Background Color Stop"
      prefix="bgc"
      className={options.range}
      stop={options.bgc}
      setStop={setOption('bgc')}
    />
    <StopSelect
      title="Foreground Color Stop"
      prefix="fgc"
      className={options.range}
      stop={options.fgc}
      setStop={setOption('fgc')}
    />
    <StopSelect
      title="Border Color Stop"
      prefix="bdc"
      className={options.range}
      stop={options.bdc}
      setStop={setOption('bdc')}
    />
    <SizeSelect
      title="Size"
      size={options.size}
      setSize={setOption('size')}
      range={options.range}
    />
    <SpacingSelect
      title="Margin"
      prefix="mar"
      className={options.mar}
      spacing={options.mar}
      setSpacing={setOption('mar')}
      range={options.range}
    />
    <SpacingSelect
      title="Padding"
      prefix="pad"
      className={options.pad}
      spacing={options.pad}
      setSpacing={setOption('pad')}
      range={options.range}
    />
    <BorderSelect
      title="Border Width"
      prefix="bdw"
      // className={options.bdw}
      border={options.bdw}
      setBorder={setOption('bdw')}
      range={options.range}
    />
    <BorderSelect
      title="Border Radius"
      prefix="bdr"
      // className={options.bdw}
      border={options.bdr}
      setBorder={setOption('bdr')}
      range={options.range}
    />
    <h3 className="mar-b-2">Options</h3>
    <div className="grid-fill">
      <CheckOption
        label='Border'
        checked={options.border}
        toggle={toggleOption('border')}
      />
    </div>
  </div>

export default Controls
