import React from 'react'

export const ClassMap = ({classes}) =>
  <table className="brand celled striped mar-b-8">
    <thead>
      <tr>
        <th>Class</th>
        <th>Property</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { classes.map(
        cls =>
          <tr key={cls[0]}>
            <td><code className="nowrap">{cls[0]}</code></td>
            <td><code className="nowrap">{cls[1]}</code></td>
            <td>{cls[2]}</td>
          </tr>
      ) }
    </tbody>
  </table>

export default ClassMap