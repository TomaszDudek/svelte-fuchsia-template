<script>
  export let placeholder = 'placeholder';
  export let label = 'input label';
  export let type = 'text';

  const id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(2, 10);
</script>

<div class="input">
  <label class="input__label" for={id}>{label}</label>
  <input {id} {type} {placeholder} class="input__field" />
</div>

<style lang="scss">
  .input {
    margin-bottom: 30px;

    &__label {
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      font-weight: bold;
      letter-spacing: 0.075em;
      line-height: 1em;
      text-transform: uppercase;
      cursor: pointer;
      display: block;
      margin-bottom: 0.25em;
      padding-left: 0.125em;
      text-align: left;
    }

    &__field {
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      font-weight: normal;
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-shadow: none;
      display: block;
      margin: 0;
      min-width: 100%;
      padding: 1em;
      transition: border-color 635ms ease, box-shadow 3250ms ease;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.5);
      color: rgba(255, 255, 255, 0.75);

      &:active,
      &:focus {
        border-color: #db00db;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(255 0 255 / 60%);
        outline: 0;
        transition: border-color 125ms ease, box-shadow 200ms ease;
      }

      @media (prefers-color-scheme: light) {
        background-color: rgba(255, 255, 255, 0.5);
        border-color: rgba(0, 0, 0, 0.5);
        color: black;
      }
    }
  }
</style>
