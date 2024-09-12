import React      from 'react'

const Splits = [
  ['2',    'One half',        '50%'],
  ['3',    'One third',       '33.33333333%'],
  ['2-3',  'Two thirds',      '66.66666666%'],
  ['4',    'One quarter',     '25%'],
  ['3-4',  'Three quarters',  '75%'],
  ['5',    'One fifth',       '20%'],
  ['2-5',  'Two fifths',      '40%'],
  ['3-5',  'Three fifths',    '60%'],
  ['4-5',  'Four fifths',     '80%'],
  ['6',    'One sixth',       '16.66666666%'],
  ['5-6',  'Five sixth',      '83.33333333%'],
  ['7',    'One seventh',     '14.28571429%'],
  ['2-7',  'Two sevenths',    '28.57142858%'],
  ['3-7',  'Three sevenths',  '42.85714287%'],
  ['4-7',  'Four sevenths',   '57.14285716%'],
  ['5-7',  'Five sevenths',   '71.42857145%'],
  ['6-7',  'Six sevenths',    '85.71428574%'],
  ['8',    'One eighth',      '12.5%'],
  ['3-8',  'Three eighths',   '37.5%'],
  ['5-8',  'Five eighths',    '62.5%'],
  ['7-8',  'Seven eighths',   '87.5%'],
  ['9',    'One ninth',       '11.11111111%'],
  ['2-9',  'Two ninths',      '22.22222222%'],
  ['4-9',  'Four ninths',     '44.44444444%'],
  ['5-9',  'Five ninths',     '55.55555555%'],
  ['7-9',  'Seven ninths',    '77.77777777%'],
  ['8-9',  'Eight ninths',    '88.88888888%'],
  ['10',   'One tenth',       '10%'],
  ['3-10', 'Three tenths',    '30%'],
  ['7-10', 'Seven tenths',    '70%'],
  ['9-10', 'Nine tenths',     '90%'],
  ['11',   'One eleventh',    '9.090909090%'],
  ['12',   'One twelfth',     '8.333333333%'],
  ['13',   'One thirteenth',  '7.692307692%'],
  ['14',   'One fourteenth',  '7.142857142%'],
  ['15',   'One fifteenth',   '6.666666666%'],
  ['16',   'One sixteenth',   '6.25%'],
]

export const SplitsTable = () =>
  <table className="brand celled striped properties small wide mar-b-2">
    <thead>
      <tr>
        <th>Class</th>
        <th>Size</th>
        <th>%age Width</th>
      </tr>
    </thead>
    <tbody>
      { Splits.map(
        split =>
          <tr key={split[0]}>
            <td><code>split-{split[0]}</code></td>
            <td>{split[1]}</td>
            <td>{split[2]}</td>
          </tr>
      )}
    </tbody>
  </table>

export default SplitsTable
