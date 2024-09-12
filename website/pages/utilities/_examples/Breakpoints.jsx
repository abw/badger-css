import React from 'react'

export const BreakpointRems = {
  mobile:     30,
  tablet:     45,
  laptop:     60,
  desktop:    75,
  widescreen: 90,
}

const Breakpoints = () =>
  <table className="brand celled striped properties small wide mar-b-2">
    <thead>
      <tr>
        <th>Class</th>
        <th>Rems</th>
        <th>Pixels</th>
      </tr>
    </thead>
    <tbody>
      { Object.entries(BreakpointRems).map(
        ([name, rems]) =>
          <tr key={name}>
            <td><code>{name}</code></td>
            <td>{rems}rem</td>
            <td>{rems * 16}px</td>
          </tr>
      )}
    </tbody>
  </table>

export default Breakpoints