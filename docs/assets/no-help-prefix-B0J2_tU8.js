const e=`<div class="grid-2 gap-4">
  <div>
    <h4 class="mar-b-2">Help Prefix</h4>
    <div class="field valid">
      <label>Valid Field</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Correct!</div>
    </div>
    <div class="field invalid">
      <label>Invalid Field</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Incorrect!</div>
    </div>
  </div>

  <div data-badger-help-prefix="none">
    <h4 class="mar-b-2">No Help Prefix</h4>
    <div class="field valid">
      <label>Valid Field Without Help Prefix</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Correct!</div>
    </div>
    <div class="field invalid">
      <label>Invalid Field Without Help Prefix</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Incorrect!</div>
    </div>
  </div>
</div>`;export{e as default};
