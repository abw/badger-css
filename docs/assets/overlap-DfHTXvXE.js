const e=`<style>
  label.checkbox-overlap {
    --bgcolor: var(--color-90);
    padding: 0 !important;
  }
  label.checkbox-overlap:hover {
    --bgcolor: var(--color-85);
  }
  label.checkbox-overlap .state {
    background-color: var(--bgcolor);
    padding: 0.25rem 1rem;
    text-align: center;
  }
  label.checkbox-overlap .on.state {
    visibility: hidden;
  }
  label.checkbox-overlap:has(:checked) .on.state {
    --bgcolor: var(--blue-50);
    color: white;
    visibility: visible;
  }
</style>

<label class="checkbox-overlap no-focus">
  <div class="grid overlap mar-r-2">
    <input type="checkbox"/>
    <div class="state off">Off</div>
    <div class="state on">On</div>
  </div>
  Some text goes here
</label>
`;export{e as default};
