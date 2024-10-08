const o=`<style>
  .shaded.checkbox {
    color:            var(--color-20);
    background-color: var(--color-95);
    border-color:     var(--color-70);
    accent-color:     var(--color-40);
    margin-right:     0.5em;
  }
  .shaded.checkbox:hover {
    color:            var(--color-0);
    background-color: var(--color-90);
    border-color:     var(--color-60);
  }
  [data-theme=dark] .shaded.checkbox {
    color:            var(--color-80);
    background-color: var(--color-15);
    border-color:     var(--color-30);
    accent-color:     var(--color-70);
  }
  [data-theme=dark] .shaded.checkbox:hover {
    color:            var(--color-100);
    background-color: var(--color-20);
    border-color:     var(--color-40);
  }
</style>
<div class="grid gap-2">
  <label class="shaded border checkbox">
    <input type="checkbox">
    Grey 1
  </label>
  <label class="red shaded border checkbox">
    <input type="checkbox">
    Red
  </label>
  <label class="green shaded border checkbox">
    <input type="checkbox">
    Green
  </label>
  <label class="blue shaded border checkbox">
    <input type="checkbox">
    Blue
  </label>
</div>`;export{o as default};
