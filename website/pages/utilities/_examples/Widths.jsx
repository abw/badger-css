import React from 'react'
import { arrayMapCommasOr } from 'website/utils/list.jsx'

const RemSizes = [
  2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 25,
  30, 35, 40, 45, 50, 60, 70, 80, 90, 100
]

export const Widths = () =>
  <table className="brand celled striped properties small wide mar-b-2">
    <thead>
      <tr>
        <th>Rem Class</th>
        <th>Pixel Class</th>
        <th>Rems</th>
        <th>Pixels</th>
      </tr>
    </thead>
    <tbody>
      { RemSizes.map(
        rem =>
          <tr key={rem}>
            <td><code>width-{rem}rem</code></td>
            <td><code>width-{rem * 16}px</code></td>
            <td>{rem}</td>
            <td>{rem * 16}</td>
          </tr>
      )}
    </tbody>
  </table>

export const RemValues = () =>
  <>
    { arrayMapCommasOr(RemSizes, rem => <code>{rem}</code>) }.
  </>


export default Widths