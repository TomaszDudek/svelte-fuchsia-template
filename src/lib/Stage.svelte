<script>
  import { onMount } from 'svelte';

  export let brandName;
  export let id = '';

  import svelteLogo from '../assets/svelte.svg';
  import viteLogo from '../assets/vite.svg';
  import fuchsiaLogo from '../assets/fuchsia-muster-icon.svg';
  import { sectionNavItems } from '../store.js';

  onMount(() => {
    if (id !== '') {
      $sectionNavItems = [...$sectionNavItems, { title: 'Top', id: id }];
    }
  });
</script>

<section class="stage" {id}>
  <div class="stage__container">
    <h1>Hallo {brandName}!</h1>
    <a href="https://fuchsia.tomaszdudek.de/" target="_blank" rel="noreferrer">
      <img src={fuchsiaLogo} class="logo fuchsia" alt="Fuchsia Logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>

    <h2>Fuchsia + Vite + Svelte</h2>
    <p>
      Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer"
        >SvelteKit</a
      >, the official Svelte app framework powered by Vite!
    </p>
    <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
  </div>
</section>

<style lang="scss">
  .stage {
    border: 1px solid hsl(var(--c-brand-primary));
    height: 100vh;
    padding-top: 100px;
    width: 100vw;

    &__container {
      @extend %container;
    }
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .logo.fuchsia:hover {
    filter: drop-shadow(0 0 2em rgb(255, 0, 255));
  }

  .read-the-docs {
    color: #888;
  }
</style>
