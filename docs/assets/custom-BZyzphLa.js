const t=`<style>
  .big-blue-tooltips {
    --tooltip-font-size: 1.25rem;
    --tooltip-font-weight: 500;
    --tooltip-padding: 0.75em 1.5em;
    --tooltip-radius: 0.5em;
    --tooltip-margin: 10px;
    --tooltip-arrow: 16px;
    --tooltip-background: var(--blue-50);
    --tooltip-color: var(--blue-90);
    --tooltip-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3);
  }
  [data-theme=dark] .big-blue-tooltips {
    --tooltip-color: var(--blue-0);
  }
</style>
<div class="big-blue-tooltips">
  <div class="flex space">
    <button
      data-tooltip="top left"
      aria-label="This is a tooltip to the top left"
    >
      Tooltip top left
    </button>
    <button
      data-tooltip="top right"
      aria-label="This is a tooltip to the top right"
    >
      Tooltip top right
    </button>
  </div>
  <div class="flex space mar-t-4">
    <button
      data-tooltip="bottom left"
      aria-label="This is a tooltip to the bottom left"
    >
      Tooltip bottom left
    </button>
    <button
      data-tooltip="bottom right"
      aria-label="This is a tooltip to the bottom right"
    >
      Tooltip bottom right
    </button>
  </div>
</div>`;export{t as default};
