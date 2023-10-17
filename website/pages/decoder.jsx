import React from 'react'
import { useState } from 'react'
import decodeClasses from '../utils/decode.js'

const Decoder = () => {
  const [input, setInput] = useState('')
  return (
    <div>
      <h1>Class Decoder</h1>
      <p>
        Enter one or more Badger-CSS classes for an explanation.
      </p>
      <form className="max-width-30rem">
        <div className="field">
          <label>CSS Classes</label>
          <input
            type="text"
            className="wide"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        <button
          type="button" className="reset grey button outline"
          onClick={() => setInput('')}
        >
          Reset
        </button>
      </form>
      <div>
        { Boolean(input.length) &&
          <Result input={input}/>
        }
      </div>
    </div>
  )
}

const Result = ({input}) => {
  const results = decodeClasses(input)
  console.log(`results: `, results)

  return (
    <table className="celled border bdr-2 mar-t-4">
      <tbody>
        { results.map(
          (result, n) =>
            <tr key={n}>
              <td className="font-mono bgc-95 bgd-10 split-4">
                <span className="green fgc-50">{result.good.join('-')}</span>
                { Boolean(result.rest.length) &&
                <span className="red fgc-50">
                  {Boolean(result.good.length) && '-'}
                  {result.rest.join('-')}</span>
                }
              </td>
              <td className="bgc-100 bgd-5">
                {result.description}
              </td>
              <td className="bgc-100 bgd-5 font-mono small">
                { Boolean(result.next.length) &&
                  result.next.map( r => `-${r} `)
                }
              </td>
            </tr>
        )}
      </tbody>
    </table>
  )
}

export default Decoder