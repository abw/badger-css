const r=`<style>
  .frame {
    --border-width:  3px;
    --border-color:  var(--blue-50);
    --border-radius: 10px;
  }
  .rounder {
    --border-radius: 20px;
  }
  .wider {
    --border-width:  6px;
  }
  .danger {
    --border-color: var(--red-50);
  }
</style>
<div>
  <div class="frame border pad-4 mar-b-4">
    This element has a wide border.
  </div>
  <div class="rounder frame border pad-4 mar-b-4">
    This has a rounder border.
  </div>
  <div class="wider frame border pad-4 mar-b-4">
    This has a wider border.
  </div>
  <div class="wider rounder danger frame border pad-4 mar-b-4">
    This has a wider rounder red border.
  </div>
</div>
<div class="inverse red pad-4" style="--border-radius: 20px">
  If you don't have the <code>border</code> or one of the
  <code>bdr-N</code> classes then setting the
  <code>--border-radius</code> property won't have any effect.
</div>
<div class="inverse green radius pad-4 mar-t-4" style="--border-radius: 20px">
  Add the <code>radius</code> class if you need to force the
  <code>--border-radius</code> property to take effect.
</div>
`;export{r as default};
