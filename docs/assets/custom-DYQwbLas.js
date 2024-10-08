const o=`<div>
  <style>
    .shaded.radio {
      color:            var(--color-40);
      background-color: var(--color-95);
      border-color:     var(--color-70);
      accent-color:     var(--color-40);
      margin-bottom:    0.5em;
    }
    .shaded.radio:hover {
      color:            var(--color-0);
      background-color: var(--color-90);
      border-color:     var(--color-60);
    }
    [data-theme=dark] .shaded.radio {
      color:            var(--color-80);
      background-color: var(--color-15);
      border-color:     var(--color-30);
      accent-color:     var(--color-70);
    }
    [data-theme=dark] .shaded.radio:hover {
      color:            var(--color-100);
      background-color: var(--color-20);
      border-color:     var(--color-40);
    }
  </style>
  <label class="red shaded wide radio">
    <input type="radio" name="color">
    Red
  </label>
  <label class="orange shaded wide radio">
    <input type="radio" name="color">
    Orange
  </label>
  <label class="yellow shaded wide radio">
    <input type="radio" name="color">
    Yellow
  </label>
  <label class="green shaded wide radio">
    <input type="radio" name="color">
    Green
  </label>
  <label class="blue shaded wide radio">
    <input type="radio" name="color">
    Blue
  </label>
</div>`;export{o as default};
