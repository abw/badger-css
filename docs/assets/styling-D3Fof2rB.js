const n=`<style>
  form.shaded {
    --input-padding-v: 0.5em;
    --input-padding-h: 1em;
    --input-border-width: 2px;
    --input-border-radius: 8px;
    --input-focus-ring-width: 6px;
    --input-focus-ring-gap: 3px;
    --input-border-color: var(--grey-80);
    --input-background-color: linear-gradient(
      180deg,
      var(--color-90) 0%,
      var(--color-95) 20%,
      var(--color-100) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--color-90) 0%,
      var(--color-95) 40%,
      var(--color-100) 100%
    );
    --input-focus-background-color: linear-gradient(
      180deg,
      var(--blue-90) 0%,
      var(--blue-95) 20%,
      var(--blue-100) 100%
    );
  }
  form.shaded .field {
    --label-size: var(--size-medium);
    --label-inset: 0;
  }
  form.shaded .field.valid {
    --input-border-color: var(--green-80);
    --input-background-color: linear-gradient(
      180deg,
      var(--green-90) 0%,
      var(--green-95) 20%,
      var(--green-100) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--green-90) 0%,
      var(--green-95) 40%,
      var(--green-100) 140%
    );
  }
  form.shaded .field.invalid {
    --input-border-color: var(--red-80);
    --input-background-color: linear-gradient(
      180deg,
      var(--red-90) 0%,
      var(--red-95) 20%,
      var(--red-100) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--red-90) 0%,
      var(--red-95) 40%,
      var(--red-100) 140%
    );
  }
  [data-theme=dark] form.shaded {
    --input-background-color: linear-gradient(
      180deg,
      var(--color-10) 0%,
      var(--color-5) 20%,
      var(--color-0) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--color-10) 0%,
      var(--color-5) 40%,
      var(--color-0) 100%
    );
    --input-focus-background-color: linear-gradient(
      180deg,
      var(--blue-10) 0%,
      var(--blue-5) 20%,
      var(--blue-0) 100%
    );
  }
  [data-theme=dark] form.shaded .field.valid {
    --input-border-color: var(--green-20);
    --input-background-color: linear-gradient(
      180deg,
      var(--green-10) 0%,
      var(--green-5) 20%,
      var(--green-0) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--green-10) 0%,
      var(--green-5) 40%,
      var(--green-0) 140%
    );
  }
  [data-theme=dark] form.shaded .field.invalid {
    --input-border-color: var(--red-20);
    --input-background-color: linear-gradient(
      180deg,
      var(--red-10) 0%,
      var(--red-5) 20%,
      var(--red-0) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--red-10) 0%,
      var(--red-5) 40%,
      var(--red-0) 140%
    );
  }
</style>
<form class="shaded">
  <div class="field">
    <label>Text input</label>
    <input type="text" name="t" class="wide"/>
  </div>
  <div class="grid-2 gap-4">
    <div class="field valid">
      <label>Text input - valid</label>
      <input type="text" name="t" class="wide"/>
      <div class="help">This is a valid field</div>
    </div>
    <div class="field invalid">
      <label>Text input - invalid</label>
      <input type="text" name="t" class="wide"/>
      <div class="help">This is an invalid field</div>
    </div>
  </div>
  <div class="field">
    <label>Textarea input</label>
    <textarea name="ta" class="wide"></textarea>
  </div>
  <div class="field">
    <label>Password input</label>
    <input type="password" name="p" class="wide"/>
  </div>
  <div class="field">
    <label>Select input</label>
    <select name="s" class="wide">
      <option value="" hidden disabled selected>Choose an animal</option>
      <option value="ant">Ant</option>
      <option value="badger">Badger</option>
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="elephant">Elephant</option>
    </select>
  </div>
  <div class="field">
    <label>Checkbox input</label>
    <label class="checkbox border wide">
      <input type="checkbox" name="c">
      Checkbox
    </label>
  </div>
  <div class="field">
    <label>Radio button input</label>
    <div class="flex gap-4">
      <label class="radio border">
        <input type="radio" name="r">
        Radio 1
      </label>
      <label class="radio border">
        <input type="radio" name="r">
        Radio 2
      </label>
      <label class="radio border">
        <input type="radio" name="r">
        Radio 3
      </label>
    </div>
  </div>
</form>`;export{n as default};
