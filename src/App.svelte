<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from './assets/vite.svg'
  import Counter from './lib/Counter.svelte'
  import NavBar from "./lib/NavBar.svelte";

  let name = 'fuchsia'
</script>

<NavBar name={name}/>
<main>
  <div>
    <h1>Hallo {name}!</h1>
    <a href="https://fuchsia.tomaszdudek.de/" target="_blank" rel="noreferrer">
      <img src="public/favicon.svg" class="logo fuchsia" alt="Fuchsia Logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="{viteLogo}" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h2>Fuchsia + Vite + Svelte</h2>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  main {
    height: 200vh;
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
