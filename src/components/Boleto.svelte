<script>
  export let bgColor = "#454f54";
</script>

<article
  class="ticket min-w-80 sm: sm:min-w-72 hover:scale-[105%] hover:-translate-y-2 duration-300"
>
  <header class="ticket__wrapper">
    <div class="ticket__header" style="background-color: {bgColor};">
      <slot name="header" />
    </div>
  </header>
  <div class="ticket__divider" style="--bgColor: {bgColor}">
    <div class="ticket__notch" style="--bgColor: {bgColor}"></div>
    <div
      class="ticket__notch ticket__notch--right"
      style="--bgColor: {bgColor}"
    ></div>
  </div>
  <div class="ticket__body" style="background-color: {bgColor};">
    <section class="ticket__section">
      <slot name="body" />
    </section>
  </div>
  <footer class="ticket__footer">
    <slot name="footer" />
  </footer>
</article>

<style>
  *,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #454f54;
    background-color: #f4f5f6;
    background-image: linear-gradient(to bottom left, #abb5ba, #d5dadd);
  }
  .ticket {
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 24rem;
  }
  .ticket__header,
  .ticket__body,
  .ticket__footer {
    padding: 1.25rem;
    background-color: var(--bgColor);
    border: 1px solid #abb5ba91;
    box-shadow: 0 15px 15px rgba(41, 54, 61, 0);
  }

  .ticket__body {
    padding-top: 1rem;
  }

  .ticket__header {
    font-size: 1.5rem;
    border-bottom: none;
    box-shadow: none;
    border-radius: 20px 20px 0px 0px;
  }
  .ticket__wrapper {
    box-shadow: 0 2px 4px rgba(41, 54, 61, 0.25);
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
  }
  .ticket__divider {
    position: relative;
    height: 1rem;
    background-color: var(--bgColor);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .ticket__divider::after {
    content: "";
    position: absolute;
    height: 50%;
    width: 100%;
    top: 0;
    border-bottom: 2px dashed #e9ebed;
    background-color: var(--bgColor);
  }
  .ticket__notch {
    position: absolute;
    left: -0.5rem;
    width: 1rem;
    height: 1rem;
    overflow: hidden;
  }
  .ticket__notch::after {
    content: "";
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
    right: 100%;
    top: -50%;
    border: 0.5rem solid var(--bgColor); /* Set border color to transparent */
    border-radius: 50%;
    box-shadow: inset 0 2px 4px rgba(41, 54, 61, 0.25);
  }

  .ticket__notch--right {
    left: auto;
    right: -0.5rem;
  }
  .ticket__notch--right::after {
    right: 0;
  }
  .ticket__body {
    border-bottom: none;
    border-top: none;
  }
  .ticket__body > * + * {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e9ebed;
  }
  .ticket__section > * + * {
    margin-top: 0.25rem;
  }
  .ticket__section > h3 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  .ticket__header,
  .ticket__footer {
    font-weight: bold;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
  .ticket__footer {
    border-radius: 0px 0px 20px 20px;
  }
</style>
