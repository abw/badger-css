const e=`<style>
  .red-yellow {
    --gradient-from: var(--red-40);
    --gradient-to: var(--yellow-60);
  }
  .olive-green {
    --gradient-from: var(--olive-50);
    --gradient-to: var(--green-60);
  }
  .violet-purple {
    --gradient-from: var(--violet-40);
    --gradient-to: var(--purple-60);
  }
  .one-louder {
    --gradient-angle: 11deg;
  }
</style>
<div class="grid-1 gap-2">
  <div class="red-yellow one-louder gradient pad-8 fgc-100">
    Red / Yellow Gradient
  </div>
  <div class="olive-green one-louder gradient pad-8 fgc-100">
    Olive / Green Gradient
  </div>
  <div class="violet-purple one-louder gradient pad-8 fgc-100">
    Violet / Purple Gradient
  </div>
</div>
`;export{e as default};
