import React from 'react'
import { range as numberRange } from '@abw/badger-utils'

export const ScopeVars = ({scope, to, from='color', size='smallish'}) =>
  <table className={`${scope} ${size} celled striped properties mar-b-8`}>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Mapped To</th>
      </tr>
    </thead>
    <tbody>
      { numberRange(0, 100, 5).map(
        n =>
          <tr key={n}>
            <td className="font-mono">--{from}-{n}</td>
            <td className="font-mono">--{to}-{n}</td>
          </tr>
      )}
    </tbody>
  </table>

export default ScopeVars
