<script>
  export let placeholder = 'placeholder';
  export let label = 'input label';

  const id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(2, 10);
</script>

<div class="input">
  <label for={id} class="input__label">{label}</label>
  <textarea class="input__field" {id} {placeholder} />
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
      min-height: 230px;
      min-width: 100%;
      padding: 1em;
      transition: border-color 635ms ease, box-shadow 3250ms ease;
      width: 100%;
      background-color: hsl(var(--c-black) / .5);
      border-color: hsl(var(--c-white) / .5);
      color: hsl(var(--c-white) / .75);

      &:active,
      &:focus {
        border-color: hsl(var(--c-brand-primary--dark));
        box-shadow: inset 0 1px 1px hsl(var(--c-black) / .08), 0 0 8px hsl(var(--c-brand-primary) / .6);
        outline: 0;
        transition: border-color 125ms ease, box-shadow 200ms ease;
      }

      :global([data-theme='light']) & {
        background-color: hsl(var(--c-white) / .5);
        border-color: hsl(var(--c-black) / .5);
        color: hsl(var(--c-black));
      }
    }
  }
</style>
