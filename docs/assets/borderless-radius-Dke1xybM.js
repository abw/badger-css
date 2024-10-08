const d=`<div class="grid-1 gap-4">
  <div class="alert bdr-4">
    <div class="headline">Alert!</div>
    An alert with border radius of 4 units.
  </div>
  <div class="grid-2">
    <button class="solid red bdr-l-5 bdr-r-0">Left</button>
    <button class="solid green bdr-r-5 bdr-l-0">Right</button>
  </div>
  <table class="bdr-r-4 lined striped brand even-2">
    <tbody>
      <tr><th>Nigel Tufnel</th><td>Guitar</td></tr>
      <tr><th>David St.Hubbins</th><td>Guitar</td></tr>
      <tr><th>Derek Smalls</th><td>Bass</td></tr>
      <tr><th>Viv Savage</th><td>Keyboards</td></tr>
      <tr><th>Mick Shrimpton</th><td>Drums</td></tr>
    </tbody>
  </table>
  <div class="surface-1 bdr-6 pad-2">
    <div class="surface-3 bdr-4 pad-4 mar-b-6 shadow-2">
      A surface with radius of 4 units inside
      a surface with radius of 6 units.
    </div>
    <div class="surface-3 bdr-4 pad-2 shadow-1">
      <div class="surface-5 bdr-2 pad-4 mar-b-2 shadow-1">
        A surface with radius of 2 units inside
        a surface with radius of 4 units inside
        a surface with radius of 6 units.
      </div>
      <div class="surface-5 bdr-2 pad-4 shadow-1">
        Ditto
      </div>
    </div>
  </div>
</div>
`;export{d as default};
