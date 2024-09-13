const n=`<style>
  input.n {
    appearance: none;
  }
  input.year {
    width: 3.5em;
  }
  input.month {
    /* width: 6em; */
  }
  input.day {
    width: 3em;
  }
  input.n::-webkit-outer-spin-button,
  input.n::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
<div class="inputs inline">
  <div class="prefix shaded lined">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="icon"
    >
      <path
        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
        fill="currentColor"
      />
    </svg>
  </div>
  <input
    name="day" type="number" size="2"
    placeholder="Day"
    class="day n inline"
    required
  />
  <select
    name="month"
    placeholder="Month"
    class="month inline n"
    required
  >
    <option value="" hidden disabled selected>Month</option>
    <option value="01">January</option>
    <option value="02">February</option>
    <option value="03">March</option>
    <option value="04">April</option>
    <option value="05">May</option>
    <option value="06">June</option>
    <option value="07">July</option>
    <option value="08">August</option>
    <option value="09">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
  </select>
  <input
    name="year" type="number" size="4"
    placeholder="Year"
    class="year n inline"
    required
  />
</div>`;export{n as default};
