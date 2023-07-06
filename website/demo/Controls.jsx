import React from 'react'
import RangeSelect from './control/RangeSelect.jsx'
import StopSelect from './control/StopSelect.jsx'
import SpacingSelect from './control/SpacingSelect.jsx'
import SizeSelect from './control/SizeSelect.jsx'
import BorderSelect from './control/BorderSelect.jsx'
import CheckOption from './control/CheckOption.jsx'
import ShadowSelect from './control/ShadowSelect.jsx'

const Controls = ({options, setOption, toggleOption}) =>
  <div className="surface-5 pad-4">
    <div className="flex space baseline stack-desktop mar-b-2">
      <h2 className="mar-v-none">Controls</h2>
      <h3 className="text-right mar-v-none">
        <code>class=&quot;...&quot;</code>
      </h3>
    </div>
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
        title="Heading Color Stop"
        prefix="hdc"
        className={options.range}
        stop={options.hdc}
        setStop={setOption('hdc')}
      />
      <StopSelect
        title="Border Color Stop"
        prefix="bdc"
        className={options.range}
        stop={options.bdc}
        setStop={setOption('bdc')}
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
      <ShadowSelect
        title="Shadow"
        prefix="shadow"
        shadow={options.shadow}
        setShadow={setOption('shadow')}
        range={options.range}
      />
      <div>
        <h3 className="mar-b-2">Options</h3>
        <div className="grid-fill" style={{ '--min-width': '10rem' }}>
          <CheckOption
            label='Show Border'
            checked={options.border}
            toggle={toggleOption('border')}
          />
        </div>
      </div>
    </div>
  </div>

export default Controls
