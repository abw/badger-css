import React from 'react'

const Sizes = ({
  heading1='Class',
  heading2='Rem Size',
  heading3=<>Pixel Size <span className="smaller">(when 1rem=16px)</span></>,
  rows
}) =>
  <table className="brand celled striped properties small wide mar-b-2">
    <thead>
      <tr>
        <th>{heading1}</th>
        <th>{heading2}</th>
        <th>{heading3}</th>
      </tr>
    </thead>
    <tbody>
      { rows.map(
        row =>
          <tr key={row[0]}>
            <td><code>{row[0]}</code></td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
          </tr>
      )}
    </tbody>
  </table>

export default Sizes