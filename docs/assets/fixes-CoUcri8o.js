const i=`<div class="field">
  <label>Inline text input</label>
  <div class="inputs">
    <div class="prefix">
      £
    </div>
    <input type="text" class="inline">
    <div class="suffix">
      .00
    </div>
  </div>
</div>

<div class="field">
  <label>Wide text input</label>
  <div class="inputs">
    <div class="prefix">
      £
    </div>
    <input type="text">
    <div class="suffix">
      .00
    </div>
  </div>
</div>

<div class="grid-2 gap-4">
  <div class="valid field">
    <label>Valid field</label>
    <div class="inputs">
      <div class="prefix">
        £
      </div>
      <input type="text">
      <div class="suffix">
        .00
      </div>
    </div>
  </div>
  <div class="invalid field">
    <label>Invalid field</label>
    <div class="inputs">
      <div class="prefix">
        £
      </div>
      <input type="text">
      <div class="suffix">
        .00
      </div>
    </div>
  </div>
</div>
`;export{i as default};
