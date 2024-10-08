const t=`<table class="wide shaded lined">
  <thead>
    <tr>
      <th class="split-8">ID</th>
      <th class="split-4">Name</th>
      <th class="split-2">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top">
      <td>1234</td>
      <td>
        This column shouldn't grow any wider, even though
        the layout engine really, really wants to make it
        grow to contain the content.
      </td>
      <td>One half</td>
    </tr>
  </thead>
</table>

<table class="wide shaded lined mar-t-4">
  <thead>
    <tr>
      <th class="split-8">ID</th>
      <th class="split-4">Name</th>
      <th class="split-2">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top">
      <td>9</td>
      <td>Nine</td>
      <td>Not as loud as ten</td>
    </tr>
    <tr valign="top">
      <td>10</td>
      <td>Ten</td>
      <td>The loudest for most blokes</td>
    </tr>
    <tr valign="top">
      <td>11</td>
      <td>Eleven</td>
      <td>
        Well, it's one louder.
        What we go up to when we need the push
        over the cliff.
      </td>
    </tr>
  </thead>
</table>
`;export{t as default};
