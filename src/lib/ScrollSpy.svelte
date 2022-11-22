<script>
    import { scrollPositionY } from '../store.js';
</script>
<svelte:window bind:scrollY|passive={$scrollPositionY}/>