const e=`<details class="border lined" open>
  <summary>
    This details element demonstrates the problem
  </summary>
  <form>
    <div class="surface-2 border pad-2 mar-b-4">
      Normal block elements seem to be OK
    </div>
    <div class="field">
      <label>An input has width:100% by default and is too wide</label>
      <input type="text" value="Hello World!"/>
    </div>
    <div class="wide inverse blue pad-h-2 bdr-1 cols-2 mar-b-4">
      Blue box with .wide (width: 100%) is too wide
    </div>
    <div class="grid-2 gap-4">
      <div class="inverse green pad-2 bdr-1">
        Grid cell
        <div class="wide surface-3">
          .wide is ok
        </div>
      </div>
      <div class="inverse red pad-2 bdr-1">
        Grid cell
        <div class="wide pad-h-2 surface-3">
          .wide with padding is not
        </div>
      </div>
    </div>
  </form>
</details>
`;export{e as default};
