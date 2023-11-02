import React from 'react'
import { range as numberRange } from '@abw/badger-utils'

export const ScopeVars = ({
  scope,
  to,
  from='color',
  size='smallish',
  abbreviate=false
}) =>
  <table className={`${scope} ${size} celled striped properties mar-b-8`}>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Mapped To</th>
      </tr>
    </thead>
    <tbody>
      { numberRange(0, 100, 5)
        .map(
          n =>
            <Row
              key={n}
              n={n}
              from={from}
              to={to}
              abbreviate={abbreviate}
            />
        )}
    </tbody>
  </table>

const Row = ({ from, to, n, abbreviate }) => {
  if (! abbreviate || n <= 10 || n >= 90) {
    return (
      <tr key={n}>
        <td className="font-mono nowrap">--{from}-{n}</td>
        <td className="font-mono nowrap">--{to}-{n}</td>
      </tr>
    )
  }
  if (n === 15) {
    return (
      <tr key={n}>
        <td className="font-mono nowrap">..etc...</td>
        <td className="font-mono nowrap">...etc...</td>
      </tr>
    )
  }
  return null
}

export default ScopeVars
