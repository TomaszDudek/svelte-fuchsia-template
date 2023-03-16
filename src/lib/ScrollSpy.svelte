<script>
  import { scrollPositionY } from '../store.js';
</script>

<svelte:window bind:scrollY={$scrollPositionY} />
