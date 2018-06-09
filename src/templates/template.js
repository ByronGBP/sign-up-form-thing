let path = process.env.ASSETS_PATH ? process.env.ASSETS_PATH : '';

export const Template = {
  form: `
<div class="image">
  <img class="logo" src=".${path}/assets/cymit.png" alt="cymit-logo">
</div>

<section class="space">
  <span class="title-text">SIGN UP</span>
</section>

<section class="flex space contain">
  <div class="space flex">
    <input type="email" class="input-field">
    <label class="placeholder">Email</label>
    <span class="border-focus"></span>
  </div>
  <div class="space flex">
    <input type="password" class="input-field">
    <label class="placeholder">Password</label>
    <span class="border-focus"></span>
  </div>
  <div class="space flex">
    <button class="next">Next</button>
  </div>
</section>

<section class="personal-data flex space contain">
  <div class="space flex">
    <input type="name" class="input-field">
    <label class="placeholder">Full Name</label>
    <span class="border-focus"></span>
  </div>
  <div class="space flex">
    <input type="address" class="input-field">
    <label class="placeholder">Address</label>
    <span class="border-focus"></span>
  </div>
  <div class="space flex">
    <input type="postal-code" class="input-field">
    <label class="placeholder">Postal Code</label>
    <span class="border-focus"></span>
  </div>
  <div class="space flex">
    <button class="next">Sign up</button>
  </div>
</section>
`
};
