<div>
  <button><slot name="toggle" /></button>
  <menu><slot /></menu>
</div>

<style>
  div {
    position: relative;
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-block-start: 0;
    background-color: white;
    border-end-end-radius: 5px;
    border-end-start-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    overflow: hidden;
    pointer-events: none;
  }

  div:hover > menu,
  div:focus-within > menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
</style>
