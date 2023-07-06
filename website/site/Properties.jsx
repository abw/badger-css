import React from 'react'

const Properties = ({properties}) =>
  <table className="brand celled striped properties wide">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { properties.map(
        property =>
          <tr key={property[0]}>
            <td className="key nowrap"><code>{property[0]}</code></td>
            <td className="nowrap">{property[1]}</td>
            <td>{property[2]}</td>
          </tr>
      )}
    </tbody>
  </table>


export default Properties
