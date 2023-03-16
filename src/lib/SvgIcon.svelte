<script>
  export let fill = 'black';
  export let d = '';
  export let size = '1em';
</script>

<svg
  class="icon"
  viewBox="0 0 24 24"
  {fill}
  width={size}
  height={size}
  xmlns="http://www.w3.org/2000/svg"
>
  <path {d} />
</svg>

<style>
  .icon {
    position: relative;
    display: inline-block;
  }
</style>
